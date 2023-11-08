const { News } = require("../models");
const { upload } = require("../service/cloudinaryLoader");
const createError = require("../service/createError");

module.exports = async (req, res) => {
  let postImage;
  const galery = [];
  for (let i = 0; i < req.files.length; i++) {
    const info = await upload(req.files[i].path);
    if (req.files[i].originalname.includes("poster")) {
      postImage = { url: info.url, id: info.public_id };
    } else {
      galery.push({ url: info.url, id: info.public_id });
    }
  }
  const { textContent, title, date } = req.body;
  const result = await News.create({
    textContent,
    title,
    date: Number.parseInt(date),
    galery,
    postImage,
  });
  if (!result) {
    return createError(401, "News Create Error");
  }
  res.json(result);
};
