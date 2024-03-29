const express=require("express");
const Post = require("../model/PostScheema.js")
const postRouter=express.Router();
const postControler=require("../controler/postControler.js");
const upload=require("../meddleware/fileUpload.js")
const FileValidation=require("../meddleware/FileValidation.js")
const {Comments,Like} =require("../controler/PostCommentControler.js")
const PostFindById =require("../controler/PostFindById.js")
const PostDelete=require("../controler/Postdelete.js")


const sendLogo=(req,res)=>{
	res.json({logo:"http://localhost:5175/images/Photo_1708409821754.png",icon:"http://localhost:5175/images/1000194988-removebg-preview.png",status:200})
}

const sendList=async (req,res)=>{
	
	try {
		const data=await Post.find();
		
		res.json(data)
	} catch (e) {
		res.json(e)
	}
	

	
}


postRouter.get("/post",sendLogo)
postRouter.get("/postlist",sendList)
postRouter.get("/postlist/:Id",PostFindById)

postRouter.post("/post",FileValidation,postControler)
postRouter.delete("/post/delete/:id",PostDelete)
postRouter.post("/post/comment/:id",Comments)
postRouter.post("/post/like/:id",Like)






module.exports=postRouter;