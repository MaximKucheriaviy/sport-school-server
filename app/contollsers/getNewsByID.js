const { News } = require("../models");
const createError = require("../service/createError");
const cereateError = require("../service/createError");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    if (!news) {
      throw createError(401, "Not found");
    }
    res.json({ news });
  } catch (err) {
    throw createError(401, "Not found");
  }
};
