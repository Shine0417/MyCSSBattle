import axios from 'axios'
import { useState, useEffect } from 'react';
const useImage = () => {
    const [images, setImages] = useState([]);
    const [curScore, setCurScore] = useState(0);
    const development = process.env.NODE_ENV !== 'production'   
    const instance = axios.create({ baseURL: development ?"http://localhost:5000/api/image":'https://obscure-reaches-51945.herokuapp.com/api/image' });
    useEffect(() => {
        getNames();
    }, [])
    
    const getNames = async () => {
        await instance.get("/getImageInfos")
            .then((res) => {
                console.log(res.data);
                const { msg, infos } = res.data;
                if (msg === "Success") {
                    const Images = infos;
                    console.log("get Images")
                    setImages(Images);
                }
            })
    }
    const getImage = async (path) => {
        await instance.get("/getImage", { responseType: "arraybuffer", params: { path: path } })
            .then((res) => {
                const b64Data = Buffer.from(res.data, 'binary').toString('base64');

                let newImage = images;
                newImage = newImage.map(image => {
                    if (image.path === path)
                        image.url = `data:image/png;base64,${b64Data}`;
                    return image;
                })
                setImages(newImage);
                return;
            })
    }

    const submitCode = async (name, bestCode, bestName) => {
        console.log("submitCode: ", name, bestCode, bestName)
        await instance.post("/submitCode", null, { params: { name: name, bestCode: bestCode, bestName: bestName } })
            .then((res) => {
                console.log(res.data);
                const { msg, score } = res.data;
                if (msg === "Success") {
                    setCurScore(parseInt(score));
                }
            })
    }


    return {
        images,
        curScore,
        getImage,
        submitCode
    }
}

export default useImage;