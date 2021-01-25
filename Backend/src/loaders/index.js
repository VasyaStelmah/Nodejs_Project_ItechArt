const routes = require("./routes");
const middleware = require("./middleware");
module.exports = async (app) => {
  middleware(app);
  routes(app);
};
