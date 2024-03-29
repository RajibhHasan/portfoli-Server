
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: false,
    default: false
  },
  password: {
    type: String,
    required: true,
  },
  avater:{
	type:String,
	required:false,
	default: false
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});        

const UserList = new mongoose.model("UserList",userSchema);

module.exports = UserList;

