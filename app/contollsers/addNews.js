const { News } = require("../models");
const { upload } = require("../service/cloudinaryLoader");

module.exports = async (req, res) => {
  const resp = await upload(req.file.path);
  console.log(resp);
  res.json("OK");
};
