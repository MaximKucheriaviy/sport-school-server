const { Schema, model } = require("mongoose");

const ImageSchema = new Schema({
  id: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
});

const NewsSchema = new Schema({
  textContent: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  postImage: {
    type: ImageSchema,
    require: true,
  },
  galery: {
    type: [ImageSchema],
  },
  date: {
    type: Number,
    require: true,
  },
});

module.exports = model("News", NewsSchema);
