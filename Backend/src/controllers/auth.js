const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const errorHandler = require("../errors/errorHandler");
const Users = require("../models/users");

module.exports.login = async function (request, response) {
  const candidate = await Users.findAll({
    where: { email: request.body.email },
  });
  if (candidate) {
    const passwordResult = bcrypt.compareSync(
      request.body.password,
      candidate[0].password
    );
    if (passwordResult) {
      // генерация токена
      const token = jwt.sign(
        {
          id: candidate[0].id,
        },
        process.env.JWT,
        { expiresIn: 60 * 60 }
      );

      response.cookie("id_user", candidate[0].id, {
        maxAge: 3600 * 24,
      });
      response.status(200).json({
        token: `${token}`,
      });
    } else {
      response.status(401).json({
        message: "The entered password does not match",
      });
    }
  } else {
    response.status(404).json({
      message: "User with this email was not found",
    });
  }
};
module.exports.register = async function (request, response) {
  const candidate = await Users.findAll({
    where: { email: request.body.email },
  });
  if (candidate) {
    response.status(409).json({
      message: "This email already exists",
    });
  } else {
    try {
      const hash = bcrypt.genSaltSync(3);
      const password = request.body.password;
      const user = await Users.create({
        last_name: request.body.last_name,
        name: request.body.name,
        email: request.body.email,
        login: request.body.login,
        password: bcrypt.hashSync(password, hash),
      });
      response.status(201).json(user);
    } catch (e) {
      errorHandler(response, e);
    }
  }
};
module.exports.logout = function (request, response) {
  request.logout();
  response.clearCookie("id_user");
  response.status(200).json({
    message: "User logout successfully",
  });
};
