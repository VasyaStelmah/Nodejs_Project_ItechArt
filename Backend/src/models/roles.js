const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./connect");
const Roles = sequelize.define(
  "roles",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
console.log(Roles === sequelize.models.roles);
// Roles.sync({ alter: true });
module.exports = Roles;
