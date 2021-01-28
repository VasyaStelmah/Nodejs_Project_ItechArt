const mysql = require("mysql2");
const responseStatus = require("../helpers/responseStatus");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "eshop",
  password: "12345",
});
connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});
module.exports.getProduct = async function (request, response, next) {
  connection.query(
    `select * from eshop.products
    where MONTH(createdAt) = ${request.params.month}
    ORDER BY average_mark desc`,
    function (err, results, fields) {
      try {
        console.log(results); // собственно данные
        //   console.log(fields); // мета-данные полей

        response.status(200).json({
          body: responseStatus.build(
            results,
            "Product for the selected month has the highest number of ratings",
            200
          ),
        });
      } catch (err) {
        console.log(err);
      }
    }
  );
};
module.exports.getUser = async function (request, response, next) {
  connection.query(
    `select marks.user_id, count(*) as NumRepeats, users.id,users.name
      from eshop.marks INNER JOIN eshop.users
      ON marks.user_id= users.id
      group by user_id
      order by count(*) desc
      LIMIT 1;`,
    function (err, results, fields) {
      try {
        console.log(results); // собственно данные
        //   console.log(fields); // мета-данные полей

        response.status(200).json({
          body: responseStatus.build(
            results,
            "The user who has placed the most bad product ratings",
            200
          ),
        });
      } catch (err) {
        console.log(err);
      }
    }
  );
};
