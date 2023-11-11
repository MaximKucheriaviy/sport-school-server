const { News } = require("../models");

module.exports = async (req, res) => {
  const { keyword = "", old = false, page = 1, perPage = 4 } = req.query;
  const pagesCount =
    Math.floor(
      (await News.find({ title: { $regex: new RegExp(keyword, "i") } }))
        .length / perPage
    ) + 1;
  const news = await News.find({ title: { $regex: new RegExp(keyword, "i") } })
    .sort({ date: old === "true" ? 1 : -1 })
    .skip((page - 1) * perPage)
    .limit(perPage);
  res.status(201).json({ news, pagesCount });
};
