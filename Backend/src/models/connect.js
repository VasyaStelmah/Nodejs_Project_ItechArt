const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("eshop", "root", "12345", {
  // process.env.DIALECT
  dialect: "mysql",
  host: "localhost",
  dialectOptions: { decimalNumbers: true },
  define: {
    freezeTableName: true,
  },
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
module.exports = sequelize;
