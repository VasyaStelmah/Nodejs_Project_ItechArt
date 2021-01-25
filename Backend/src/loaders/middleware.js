const bodyParser = require("body-parser");
const { json } = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const express = require("express");
const app = express();
module.exports = (app) => {
  app.use(express.static("../public/"));
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(passport.initialize());
  require("../middleware/passport")(passport);
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser(process.env.SECRET));
};
