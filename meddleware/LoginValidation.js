

const LoginDataValidation = (req, res, next) => {
  const { email,password } = req.body;
console.log(req.body);
  if(email===""){res.json({msg:"Enter your valid email",path:"email"})}else if(password===""){res.json({msg:"Password must be at least 6 characters long",path:"password"})}else{next()}
  
  
  
  
  
};



module.exports=LoginDataValidation;