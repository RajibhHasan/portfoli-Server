

const emailDataValidation = (req, res, next) => {
  const { email,message, name  } = req.body;
console.log(req.body);
  if (!email || email === "") {
    res.json({ message: "Email not valid" });
  } else if (!message || message === "") {
    res.json({ message: "message not valid" });
  } else{
    next();}
  
};



module.exports=emailDataValidation;