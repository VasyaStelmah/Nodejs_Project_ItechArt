const { createLogger, transports, format } = require("winston");
require("winston-mongodb");
const logger = createLogger({
  transports: [
    new transports.MongoDB({
      level: "info",
      db: process.env.MONGO_URI,
      options: {
        useUnifiedTopology: true,
      },
      collection: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
