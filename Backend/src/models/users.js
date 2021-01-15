const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./connect');
const Users = sequelize.define('users', {
    // Model attributes are defined here
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    login: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  });
  console.log(Users === sequelize.models.users);
  // Users.sync({ alter: true });
module.exports = Users;