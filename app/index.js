const express = require("express");
const cors = require("cors");
const { morgan, defaultError, errorCatcher } = require("./middlewares");
const newsRouter = require("./routes/newsRouter");

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(morgan.morganLogger(morgan.morganSetup));
app.use(express.json());
app.use("/api/news", newsRouter);
app.use("/", defaultError);
app.use("/", errorCatcher);

module.exports = app;
