const mongoose = require("mongoose");
const logger = require("../loggers/logger");

module.exports = (app) => {
  app.use((request, response, next) => {
    logger.info(request.body);
    let oldSend = response.send;
    response.send = function (data) {
      logger.info(JSON.parse(data));
      oldSend.apply(response, arguments);
    };
    next();
  });
};
