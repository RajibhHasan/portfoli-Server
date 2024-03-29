const express=require("express");

const smsRouter=express.Router();


const smsControler=require("../controler/smsControler.js")
smsRouter.get("/images",smsControler)



module.exports=smsRouter;