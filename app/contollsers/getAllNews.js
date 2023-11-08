const { News } = require("../models");

module.exports = async (req, res) => {
  const news = await News.find();
  res.status(201).json(news);
};
