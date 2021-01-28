const express = require("express");
const init = require("./loaders");
const mongoose = require("mongoose");
const logger = require("./loggers/logger");
// (async () => {
try {
  const app = express();

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch((error) => console.log(error));
  mongoose.set("useCreateIndex", true);

  app.use((request, response, next) => {
    logger.info(request.body);
    let oldSend = response.send;
    response.send = function (data) {
      logger.info(JSON.parse(data));
      oldSend.apply(response, arguments);
    };
    next();
  });
  init(app);
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
  process.exit(1);
}
