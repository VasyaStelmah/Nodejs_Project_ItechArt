const mongoose = require("mongoose");

module.exports.createLogger = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch((error) => console.log(error));
  mongoose.set("useCreateIndex", true);
};
