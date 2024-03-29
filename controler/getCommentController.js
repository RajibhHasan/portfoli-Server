const Comment=require("../model/comment.js")


const getCommentController=async(req,res)=>{
	 try {
		const AllComments=await Comment.find();
	 res.status(200).json(AllComments)
	 } catch (e) {
		res.status(500).json({msg:"server error"})
	 }
	
}



const CommentDelete= async(req,res)=>{
	const commentId = req.params.id;
	try {
		const deletedPost = await Comment .findByIdAndDelete(commentId);
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        console.log("comment delete successfully")
        res.status(200).json({msg:"delete succesfully"})
	} catch (e) {
		console.log(e)
	}
	
}




module.exports={getCommentController,CommentDelete};