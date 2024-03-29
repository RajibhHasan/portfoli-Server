require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const User=require("../model/user.js")

const UserLoginControler=async(req,res)=>{
	const { email, password,check} = req.body;

    try {
      // check if the user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Email or password incorrect' });
      }

      // check is the encrypted password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Email or password incorrect' });
      }

      // return jwt
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JSONWEBTOKEN,
        { expiresIn: '10 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      
      
      
          if(check){
	res.cookie('token', 'cookieValueRajib', { 
    maxAge: 900000,
    
  });
          }
      
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }

	
}

module.exports=UserLoginControler;