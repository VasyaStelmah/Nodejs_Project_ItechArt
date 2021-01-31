const userService = require("../services/user");
const bcrypt = require("bcryptjs");
const errorHandler = require("../errors/errorHandler");
const Mailer = require("../middleware/mailer");

module.exports.getAll = async function (request, response, next) {
  try {
    console.log(request.cookies.id_user);
    const object = await userService.getAll();
    response
      .status(200)
      .json(responseStatus.build(object, "Get all users", 200));
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.getById = async function (request, response, next) {
  try {
    const object = await userService.getById(request.params.id);
    response
      .status(200)
      .json(responseStatus.build(object, "Get by id user", 200));
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.updateById = async function (request, response, next) {
  try {
    const hash = bcrypt.genSaltSync(3);
    const password = request.body.password;
    const object = await userService.updateById(request.params.id, {
      last_name: request.body.last_name,
      name: request.body.name,
      email: request.body.email,
      login: request.body.login,
      password: bcrypt.hashSync(password, hash),
    });
    response
      .status(200)
      .json(responseStatus.build(object, "Update by id user", 200));
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.removeById = async function (request, response, next) {
  try {
    const user = await userService.removeById(request.params.id);
    await Mailer.sendMail(
      user.email,
      "Account deleted",
      "Your account successfully deleted."
    );
    response.status(200).json(responseStatus.build(user, "User deleted", 200));
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.create = async function (request, response, next) {
  try {
    const hash = bcrypt.genSaltSync(3);
    const password = request.body.password;
    const object = await userService.create({
      last_name: request.body.last_name,
      name: request.body.name,
      email: request.body.email,
      login: request.body.login,
      password: bcrypt.hashSync(password, hash),
    });
    response.status(201).json(responseStatus.build(user, "User create", 201));
  } catch (error) {
    errorHandler(response, error);
  }
};
