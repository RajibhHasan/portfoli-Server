const express=require("express");

const logoRouter=express.Router();

const sendLogo=(req,res)=>{
	res.json({logo:`${process.env.SERVER_ADDRESS}images/Photo_1708409821754.png`,icon:`${process.env.SERVER_ADDRESS}images/1000194988-removebg-preview.png`,bg:`${process.env.SERVER_ADDRESS}/images/networking-png-8407.png`,status:200})
}
logoRouter.get("/logo",sendLogo)

module.exports=logoRouter;