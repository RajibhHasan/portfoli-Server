const Post=require("../model/PostScheema.js")

const fs = require('fs');
const path=require("path")




const detelePost=async(postId)=>{
	const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        console.log("post delete successfully")
}





const findUser=async(id)=>{
	const poste = await Post.find({ _id:id });
console.log(poste)
	if(poste[0].file){
		let filepath=poste[0].file.replace(`${process.env.SERVER_ADDRESS}`, "");

fs.unlink(path.join(__dirname,`../public/${filepath}`), (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  detelePost(id)
  console.log('File deleted successfully');
});
		
		
	}
}




const PostDelete= async(req, res) => {
    try {
        const postId = req.params.id;
       
        findUser(postId)
        res.json({ message: 'Post deleted successfully' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports=PostDelete