const express = require("express");
const { addNews, getAllNews, getNewsBytID } = require("../contollsers");
const { controllerWraper, uploader } = require("../middlewares");

const newsRouter = express.Router();

newsRouter.post("/", uploader.array("galery"), controllerWraper(addNews));
newsRouter.get("/", controllerWraper(getAllNews));
newsRouter.get("/:id", controllerWraper(getNewsBytID));

module.exports = newsRouter;
