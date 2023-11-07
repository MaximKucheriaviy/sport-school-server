const express = require("express");
const addNews = require("../contollsers/addNews");
const { controllerWraper, uploader } = require("../middlewares");

const newsRouter = express.Router();

newsRouter.post(
  "/",
  uploader.single("poster"),
  //   uploader.array("galery"),
  controllerWraper(addNews)
);

module.exports = newsRouter;
