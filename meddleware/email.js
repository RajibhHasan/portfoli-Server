require("dotenv").config();
const Comment=require("../model/comment.js")

const nodemailer = require("nodemailer");


const getUsers = async (req) => {
  try {
    
    const document = new Comment(req);
    document.save()
      .then(() => {
        console.log('Document saved successfully');
    
      })
      .catch(err => {
        console.error('Error saving document:', err);
      });
    
    
  } catch (err) {
    console.error('Error getting users:', err);
  }
};






const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port:process.env.EMAIL_PORT,
  secure: true,
  auth: {

    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASSWORD,
  },
});




const sendEmail= async (req,res,emailData)=>{
    
    try {
      const mailOption={
        from: 'rajib01943075658@gmail.com', // sender address
    to: emailData.email, // list of receivers
    subject: emailData.subject, // Subject line
    
    html: emailData.html
    }
    
    const info=await transporter.sendMail(mailOption)
console.log("emaill sent successfully");


await getUsers(req.body);


res.status(200).json({message:"successfully",
  status:200
})



    } catch (e) {
        console.log("occured send email error"+e);
        res.status(500).json({message:"unsuccessfully"})
        
    }

}


module.exports=sendEmail;