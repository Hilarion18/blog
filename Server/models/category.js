const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorytSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"]
    },
    article: { type: Schema.Types.ObjectId, ref: "Article" },
  },
  {
    timestamps: true
  }
);

const Category = mongoose.model("Category", categorytSchema);

module.exports = Category;
