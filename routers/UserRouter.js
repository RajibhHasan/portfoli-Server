const express = require("express");
const User =require("../model/user.js")
const{validateUser, handleValidationResult}=require("../meddleware/SignupValidator.js")
const UserRouter = express.Router();
const LoginDataValidation=require("../meddleware/LoginValidation.js")
const UserControler=require("../controler/UserControler.js")
const FindAllUser=require("../controler/FindAllUser.js")
const UserLoginControler=require("../controler/UserLoginControler.js")
const Auth=require("../meddleware/Auth.js")

const findUserById=require("../controler/findUserById.js")






UserRouter.post("/user/signup",validateUser, handleValidationResult,UserControler);


UserRouter.post("/user/login",LoginDataValidation,UserLoginControler);

UserRouter.get('/user/info', Auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
});

UserRouter.get("/all/userlist",FindAllUser)
UserRouter.get("/all/userlist/:userId",findUserById)






module.exports = UserRouter;
