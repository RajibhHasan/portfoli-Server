const UserList=require("../model/user.js")

const findUserById=async(req,res)=>{
	
	try {
    const user = await UserList.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
	
	
	
	
}


module.exports=findUserById;