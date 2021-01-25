const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./connect");
const Marks = sequelize.define(
  "marks",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mark: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
console.log(Marks === sequelize.models.marks);
//   Marks.sync({ alter: true });
module.exports = Marks;
