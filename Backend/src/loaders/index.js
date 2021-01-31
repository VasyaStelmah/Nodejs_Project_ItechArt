const routes = require("./routes");
const middleware = require("./middleware");
const logger = require("./logger");

module.exports = async (app) => {
  middleware(app);
  logger(app);
  routes(app);
};
