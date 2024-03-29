
const multer = require('multer');
const path = require('path');


// //Multer setup for handling multipart/form-data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"public/upload/"); 
    
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage,limits: { fileSize: 1000000 } }).single('file');


module.exports=upload;

