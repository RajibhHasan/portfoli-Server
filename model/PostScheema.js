const express = require('express');
const mongoose = require('mongoose');






// Define Post schema
const postSchema = new mongoose.Schema({
	file: String,
  text:String,
  username:String,
 
  email:String,
  avater:{
	type:String,
	required:false,
	default: false
  },
   likes: [{username:String
 }],
  comments: [{
	text: String,
	username:String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


// Create a new post
// app.post('/posts', async (req, res) => {
//   try {
//     const newPost = new Post(req.body);
//     const savedPost = await newPost.save();
//     res.json(savedPost);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// 

// app.put('/posts/:id/like', async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const updatedPost = await Post.findByIdAndUpdate(postId, { $inc: { likes: 1 } }, { new: true });
//     res.json(updatedPost);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// 

// app.post('/posts/:id/comments', async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const { text } = req.body;
//     const updatedPost = await Post.findByIdAndUpdate(
//       postId,
//       { $push: { comments: { text } } },
//       { new: true }
//     );
//     res.json(updatedPost);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// 
// 
// 