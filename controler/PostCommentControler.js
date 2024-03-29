
const Post=require("../model/PostScheema.js")

const Comments= async(req,res)=>{
	
	try {
    const postId = req.params.id;
    const { text,username } = req.body;
    
    if(text===""){
	res.json({msg:"Write your text"})
    }else{
    
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: { text,username } } },
      { new: true }
    );
    res.status(200).json({msg:"Successfully Send"});}
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
	
}


const Like=async(req,res)=>{
try {
  const postId = req.params.id;
  const { username } = req.body;
  const post = await Post.findById(postId);

  // Check if the user has already liked the post
  const alreadyLiked = post.likes.some(like => like.username === username);

  let updatedPost;
  if (alreadyLiked) {
    // If the user has already liked the post, remove the like
    updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $pull: { likes: { username } } },
      { new: true }
    );
  } else {
    // If the user hasn't liked the post, add the like
    updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { likes: { username } } },
      { new: true }
    );
  }

  res.json(updatedPost);
} catch (error) {
  res.status(500).json({ error: error.message });
}

	
}







module.exports={Comments,Like}