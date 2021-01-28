const userRepository = require("../repositories/user");
const NotFound = require("../classes/errors/4xx/NotFound");
const UnprocessableEntity = require("../classes/errors/4xx/unprocessableEntity");

module.exports.getAll = async function () {
  return await userRepository.getAll();
};
module.exports.getById = async function (id) {
  const user = await userRepository.getById({
    where: { id: id },
  });
  if (!user) {
    throw new NotFound("User is not found");
  }
  return user;
};
module.exports.updateById = async function (id, object) {
  const login = await userRepository.get({ where: { login: object.login } });
  if (login) {
    throw new UnprocessableEntity("Login already in use");
  }
  const email = await userRepository.get({ where: { login: object.email } });
  if (email) {
    throw new UnprocessableEntity("Email already in use");
  }
  const user = await userRepository.getById({ where: { id: id } });
  if (!user) {
    throw new NotFound("User is not found");
  }

  return await userRepository.updateById(id, object);
};
module.exports.removeById = async function (id) {
  const user = await userRepository.getById({ where: { id: id } });
  if (!user) {
    throw new NotFound("User is not found");
  }
  return await userRepository.removeById(id);
};
module.exports.create = async function (object) {
  const login = await userRepository.get({ where: { login: object.login } });
  if (login) {
    throw new UnprocessableEntity("Login already in use");
  }
  const email = await userRepository.get({ where: { login: object.email } });
  if (email) {
    throw new UnprocessableEntity("Email already in use");
  }
  return await userRepository.create(object);
};
