const authRoutes = require("../routes/auth");
const productRoutes = require("../routes/product");
const userRoutes = require("../routes/user");
const analyticsRoutes = require("../routes/analytics");

module.exports = (app) => {
  app.use("/auth", authRoutes);
  app.use("/product", productRoutes);
  app.use("/user", userRoutes);
  app.use("/analytics", analyticsRoutes);
};
