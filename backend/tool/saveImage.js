import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.filename + '-' + Date.now() + ".png")
    }
  })
  
const upload = multer({
    dest: path.resolve(path.dirname('./public/uploads/')),
    limits: { fileSize: 1000000, files: 1 },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        cb(new Error('Please upload an image'))
      } cb(null, true)
    }
  })

  export {storage, upload};