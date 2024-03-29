const fs=require("fs");
const path = require('path');
const smsControler=(req,res)=>{
 const imagesUrl=[];
  try {
	
fs.readdir(path.join(__dirname+"../../public/images"), (err, files) => {
  if (err) {
    res.json({message:"directory read error"})
    return;
  }
  
for(let i=0; i<files.length;i++){
	const url=`http://localhost:5175/images/${files[i]}`
	imagesUrl.push({link:url,id:files[i]})
}



 res.json({imagesUrl})
});
	
	
	
  } catch (e) {
	console.log(e)
  }

  


  
  
}


module.exports=smsControler;