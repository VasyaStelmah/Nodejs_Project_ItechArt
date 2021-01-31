const { QueryTypes } = require("sequelize");
const sequelize = require("../models/connect");
const responseStatus = require("../helpers/responseStatus");
module.exports.getProduct = async function (request, response, next) {
  try {
    const results = await sequelize.query(
      `SELECT marks.product_id, COUNT(marks.product_id) as MoreQuantityRating , products.name, products.description
      from eshop.marks  INNER JOIN eshop.products
    ON products.id= marks.product_id
         where MONTH(createdAt) = ${request.params.month}
         GROUP BY marks.product_id
         LIMIT 1;`,
      { type: QueryTypes.SELECT }
    );
    response
      .status(200)
      .json(
        responseStatus.build(
          results,
          "Product for the selected month has the highest number of ratings",
          200
        )
      );
  } catch (err) {
    console.log(err);
  }
};
module.exports.getUser = async function (request, response, next) {
  try {
    const results = await sequelize.query(
      `select marks.user_id, count(*) as NumRepeats, users.id,users.name
      from eshop.marks INNER JOIN eshop.users
      ON marks.user_id= users.id
      group by user_id
      order by count(*) desc
      LIMIT 1;`,
      { type: QueryTypes.SELECT }
    );
    console.log(results);
    response
      .status(200)
      .json(
        responseStatus.build(
          results,
          "The user who has placed the most bad product ratings",
          200
        )
      );
  } catch (err) {
    console.log(err);
  }
};
