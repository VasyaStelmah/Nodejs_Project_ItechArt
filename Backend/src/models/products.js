const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./connect');
const Products = sequelize.define('products', {
    // Model attributes are defined here
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT('tiny'),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT('tiny'),
      allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
      allowNull: false
    },
    average_mark: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    }
  });
  console.log(Products === sequelize.models.products);
  // Products.sync({ alter: true });
module.exports = Products;