import express from 'express'
import fs from 'fs'
import path from 'path';
import nodeHtmlToImage from 'node-html-to-image';
import compareImgDiff from '../tool/compareImage.js'
import { storage, upload } from '../tool/saveImage.js';
import ImageModel, { getImageInfoByName, updateScore, getImageInfos } from '../models/image.js';
import db from '../db/mongo.js';

const router = express.Router()

router.get('/getImageInfos', async (req, res) => {
  console.log("/getImageNames ", req.query);
  const info = await getImageInfos();
  console.log("send info:")
  return res.send({ msg: "Success", infos: info })
})

router.get('/getImageInfo', async (req, res) => {
  console.log("/getimageInfo ", req.query);
  const { name } = req.query;
  if (name)
    return res.send({ msg: "Success", img: await getImageInfoByName(name) })
  else {
    return res.send("Error")
  }
})

router.get('/getImage', async (req, res) => {
  console.log("/image ", req.query);
  if (req.query.name) {
    const data  = await ImageModel.findOne({name: req.query.name})
    console.log(data.img)
    res.contentType('image/jpeg');
    return res.end(data.img.data, 'binary');
  }
  return res.send("Error")
})

router.post('/newImage', upload.single('image'), async (req, res) => {
  console.log("/newImage ", req.body, req.file.path);
  if (!req.body.name || !req.file.filename)
    return res.send("Error")
  try {
    const data = await ImageModel.create({
      name: req.body.name, img: {
        data: fs.readFileSync(path.resolve(path.dirname(path.join("./public/", req.file.filename, ".png")))),
        contentType: 'image/png'
      }
    });
    console.log("45", data);
  } catch (error) {
    console.log(error.message)
    return res.send(error.message);
  }
  return res.send("OK")
})

router.post('/submitCode', async (req, res) => {
  console.log("/submitCode ", req.query);
  const { name, bestCode, bestName } = req.query
  try {
    const originalImage = await ImageModel.findOne({name: name})
    var buf = Buffer.from(originalImage.img.data, 'base64');
    fs.writeFile('./public/image.png', buf, (e)=>console.log(e));

    const newImageFilename = "./public/" + bestName + "-" + Date.now() + ".png";
    await nodeHtmlToImage({
      output: newImageFilename,
      html: bestCode,
      puppeteerArgs: { args: ["--no-sandbox"] }
    })
    const percentage = await compareImgDiff(getAbsolutePath("image.png"), newImageFilename);
    const newScore = getScore(percentage, bestCode.length)
    console.log("score: ", newScore, ", percentage: " + percentage);
    if (originalImage.bestScore < newScore) await updateScore(originalImage.name, newScore, bestCode, bestName);

    await fs.unlink(newImageFilename, (err) => {
      if (err) {
        console.error(err);
        return
      }
      console.log("deleted", newImageFilename);
    });
    return res.send({ msg: "Success", score: newScore });
  } catch (e) {
    console.log(e.message);
    return res.send(e.message);
  }
})

const getAbsolutePath = (filename) => {
  return path.resolve(path.dirname(path.join("./public/", filename, ".png")))
}

const getScore = (percentage, length) => {
  return parseInt((1 - percentage) * 1000 - length);
}

export default router