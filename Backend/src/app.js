const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
require("dotenv").config();
//красиво логировать запросы
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

const app = express();

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected..."))
//   .catch((error) => console.log(error));
// mongoose.set("useCreateIndex", true);

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(passport.initialize());
require("./middleware/passport")(passport);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET));

app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);

module.exports = app;
