const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    title: { type: String, default: false },
  },
  {
    timestamps: true,
  }
);

postSchema.statics.findAll = function () {
  return this.find({});
};

module.exports = mongoose.model("post", postSchema);
