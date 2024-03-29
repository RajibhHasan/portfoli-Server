const Post = require("../model/PostScheema.js")


const PostFindById=async(req,res)=>{
	try {
    const user = await Post.find({ email: req.params.Id });
    if (!user) {
      return res.status(404).json({ message: 'post not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
	
	
	
}

module.exports=PostFindById;