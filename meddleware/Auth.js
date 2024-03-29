require("dotenv").config();
const jwt = require('jsonwebtoken');



const Auth=(req,res,next)=>{
	  // Get token from header
  const token = req.headers.authorization.replace('Bearer ', '');
  // Use the token as needed
  

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, process.env.JSONWEBTOKEN, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
	
}

module.exports=Auth;