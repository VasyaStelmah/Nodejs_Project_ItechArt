const { Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_DATABASE,
  process.env.MYSQL_ROOT,
  process.env.MYSQL_ROOT_PASSWORD, {
  dialect:process.env.DIALECT,
  host:process.env.HOST,
  dialectOptions: {decimalNumbers: true},
  define: {
    //имя таблицы совпадает с именем модели 
    //без каких-либо изменений
    freezeTableName: true
  }
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
module.exports = sequelize;