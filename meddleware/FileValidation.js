 const multer = require('multer');
 
 const upload=require("./fileUpload.js")


const FileValidation=(req,res,next)=>{
	
	upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ msg: 'File size too large. Max size is 1MB.' });
      }
      // Handle other Multer errors as needed
      return res.status(500).json({ msg: 'Something went wrong with file upload.' });
    } else if (err) {
      // An unknown error occurred
      return res.status(500).json({ msg: 'Something went wrong.' });
    }
    
    // No errors, continue with your file processing logic here
    next();
  });
	
	
	
	
	
	
	
	
	
	
	// if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       return res.json({msg:"Only image files are allowed !"});
//     
// 	
// 	}
// 	
// 	if (req.file.size > 1000000) {
//     return res.status(400).json({ msg: 'File size too large' });
//   }
	
	
}

module.exports=FileValidation;