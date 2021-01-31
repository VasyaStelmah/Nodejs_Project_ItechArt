const express = require("express");
const mongoose = require("mongoose");
const init = require("./loaders");
const connectionMongo = require("./loaders/mongoConnect");
(async () => {
  try {
    const app = express();
    await connectionMongo.createLogger();
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
})();
