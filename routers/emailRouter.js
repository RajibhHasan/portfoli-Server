const express = require("express");
const{ getCommentController,CommentDelete}=require("../controler/getCommentController.js")
const Comment = express.Router();

const postEmail=require("../controler/emailControler.js")
const emailDataValidation=require("../meddleware/emailDataValidation.js")
Comment.post("/Comment",emailDataValidation,postEmail);
Comment.get("/user/comments",getCommentController)
Comment.delete("/user/comments/delete/:id",CommentDelete)


module.exports = Comment;
