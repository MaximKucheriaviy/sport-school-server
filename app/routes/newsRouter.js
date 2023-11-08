const express = require("express");
const { addNews, getAllNews } = require("../contollsers");
const { controllerWraper, uploader } = require("../middlewares");

const newsRouter = express.Router();

newsRouter.post("/", uploader.array("galery"), controllerWraper(addNews));
newsRouter.get("/", controllerWraper(getAllNews));

module.exports = newsRouter;
