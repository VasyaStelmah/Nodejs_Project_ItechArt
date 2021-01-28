// const Marks = require("../models/marks");
// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = require("../models/connect");

// module.exports = async function (productId, rating) {
//   try {
//     const getProductId = await Marks.findAll({
//       attributes: [
//         "product_id", // We had to list all attributes...
//         [sequelize.fn("COUNT", sequelize.col("product_id")), "count"], // To add the aggregation...
//       ],
//       where: { product_id: productId },
//     });
//     const countId = await Marks.findAll({
//       where: { product_id: productId },
//     });

//     let index;
//     let sum = 0;

//     for (index = 0; index < Object.keys(countId).length; ++index) {
//       // console.log(`Цикл:${index} ${countId[index].mark}`);
//       sum = sum + countId[index].mark;
//       // console.log(`Сумма: ${sum}`);
//     }

//     let final = sum / Object.keys(countId).length + 0.01;
//     // console.log(`Среднее значение ${index}:  ${final.toFixed(1)}`);
//     return final.toFixed(1);
//   } catch (e) {
//     console.log(e);
//   }
// };
// let averageFunction = await averageMark(index);
// const result = await Products.update(
//   {
//     average_mark: averageFunction,
//   },
//   { where: { id: parseProd[0].id } }
// );
