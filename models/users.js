const mongoose = require("mongoose");
const { Schema } = mongoose;
const { isEmail } = require('validator');
const package = require('./packages')
const userSchema = Schema({
  _id: Schema.Types.ObjectId,

  fullname: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 3,
   
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    enum: { values: ["Male", "Female"], message: "{VALUE} is not supported" },
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: "client",
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  packagesBought:{
    type:[package]
  }
});

const commentSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "user" },
  package: package,
  content: {
    type: String,
    required: true,
    minlength:10,
  },
  stars: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
const Comment = mongoose.model("comment",commentSchema);

module.exports = { User,Comment };
