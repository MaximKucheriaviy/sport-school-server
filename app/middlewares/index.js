const morgan = require("./morganSetup");
const defaultError = require("./defaultError");
const errorCatcher = require("./errorCatcher");
const uploader = require("./uploader");
const controllerWraper = require("./controllerWrapper");

module.exports = {
  morgan,
  defaultError,
  errorCatcher,
  uploader,
  controllerWraper,
};
