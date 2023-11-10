const { News } = require("../models");

module.exports = async (req, res) => {
  const { old = false, page = 1, perPage = 4 } = req.query;
  const pagesCount = Math.floor((await News.find()).length / perPage) + 1;
  const news = await News.find()
    .sort({ date: old === "true" ? 1 : -1 })
    .skip((page - 1) * perPage)
    .limit(perPage);
  res.status(201).json({ news, pagesCount });
};
