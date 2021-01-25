const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const errorHandler = require("../errors/errorHandler");
const Users = require("../models/users");
const responseStatus = require("../helpers/responseStatus");

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
        body: responseStatus.build(candidate, "succes", 200),
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
  if (candidate !== []) {
    response.status(409).json({
      body: responseStatus.build(candidate, "This email already exists", 409),
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
      response.status(201).json({
        body: responseStatus.build(user, "User create", 201),
      });
    } catch (e) {
      errorHandler(response, e);
    }
  }
};
module.exports.logout = function (request, response) {
  request.logout();
  response.clearCookie("id_user");
  response.status(200).json({
    body: responseStatus.build(user, "User logout successfully", 200),
  });
};
