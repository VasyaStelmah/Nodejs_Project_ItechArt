const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./connect");
const Tags = sequelize.define(
  "tags",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
// console.log(Tags === sequelize.models.tags);
// console.log("Tags");
// Tags.sync({ alter: true });
module.exports = Tags;
