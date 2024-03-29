const sendEmail=require("../meddleware/email.js")
const fs=require("fs");
const postEmail=(req,res)=>{
 const { email,name,message} = req.body;
 
 
 
 const emailData = {
        email,
        subject: "Rajib Hasan",
        html: `<h2 style="text-align:center">Comment Recived Successfully </h2>
  <h4>Dear sir</h4>
    <h6>Wellcome to my website, your comment :${message}.please contact my <a href="https://www.facebook.com/profile.php?id=100092192364083">facebook</a> </h6>
    <h5>Thank you sir</h5>
    `
    
    };

    sendEmail(req,res,emailData);
  
  
 
 
 
  
  
}


module.exports=postEmail;