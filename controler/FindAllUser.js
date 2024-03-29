
const UserList=require("../model/user.js")

const FindAllUser=async(req,res)=>{
	 const allUser=await UserList.find();
	 res.json(allUser)
	
	
}

module.exports=FindAllUser;