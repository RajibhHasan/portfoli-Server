
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserList = require('../model/user.js');




const UserControler = async(req, res)=> {
    const { email, password,username } = req.body;

    try {
      // check if the user exists
      let user = await UserList.findOne({ email });
      console.log(user)
      if (user) {
        return res.status(400).json({ msg: 'User already exist' });
      }


const hash = await bcrypt.hashSync(password, 10)

    // Create a new user
    const newUser = new UserList({
     username,
      email,
      password: hash
      
    });

    // Save the user to the database
    await newUser.save();

res.json({message:"User added succesfully"})



      
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
	
	


module.exports = UserControler;