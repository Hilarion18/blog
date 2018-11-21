const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate')

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"]
    },
    content: {
      type: String,
      required: [true, "content is required"]
    },
    picture: {
      type: String,
      required: [true, "image is required"]
    },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
  },
  {
    timestamps: true
  }
);

articleSchema.plugin(mongoosePaginate);
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
