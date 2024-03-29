const Post = require("../model/PostScheema.js")

const postControler =async (req, res)=> {

	try {
		
		const {text,username,email,avater}=req.body;
	
	console.log(req.body)
let filename=null;
let url;
if(req.file){
	 let {filename}=req.file;
	 
	  url=`http://localhost:5175/upload/${filename}`;
}
 if(!req.file){
	url=null;
 }
		const newPost = new Post({
			likes:[{username:username}],
		text:text,
		file:url,
		username:username,
		email:email,
		avater:avater,
		comments:[{text:"Nice picture",username:username}]});
		
		
		
		
		
		
	
		const savedPost = await newPost.save();
		
		res.json({msg:"Post Successfully ! "});
	} catch (error) {
		res.status(500).json({
			error: error.message
		});
	}

//

}


module.exports = postControler;