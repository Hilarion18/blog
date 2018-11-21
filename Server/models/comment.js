const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "comment is required"]
    },
    article: { type: Schema.Types.ObjectId, ref: "Article" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
