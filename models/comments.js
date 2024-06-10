const mongoose = require("mongoose");
const package = require('./packages')
const User = require("./users");

const commentSchema = new mongoose.Schema({
    author: { type: Schema.Types.ObjectId, ref: User._id },
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
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  });
  const Comment = mongoose.model("comment",commentSchema);
module.exports = { Comment }