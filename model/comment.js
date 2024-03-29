const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    message: String
});

const Comment = mongoose.model("User", userSchema);

module.exports = Comment;
