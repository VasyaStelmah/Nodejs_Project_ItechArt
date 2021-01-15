const userRepository = require("../repositories/user");
const MyError = require("../errors/error");

module.exports.getAll = async function () {
  return await userRepository.getAll();
};
module.exports.getById = async function (id) {
  const user = await userRepository.getById({
    where: { id: id },
  });
  if (!user) {
    throw new MyError("User is not found", 404);
  }
  return user;
};
module.exports.updateById = async function (id, object) {
  const login = await userRepository.get({ where: { login: object.login } });
  if (login) {
    throw new MyError("Login already in use", 422);
  }
  const email = await userRepository.get({ where: { login: object.email } });
  if (email) {
    throw new MyError("Email already in use", 422);
  }
  const user = await userRepository.getById({ where: { id: id } });
  if (!user) {
    throw new MyError("User is not found", 404);
  }

  return await userRepository.updateById(id, object);
};
module.exports.removeById = async function (id) {
  const user = await userRepository.getById({ where: { id: id } });
  if (!user) {
    throw new MyError("User is not found", 404);
  }
  return await userRepository.removeById(id);
};
module.exports.create = async function (object) {
  const login = await userRepository.get({ where: { login: object.login } });
  if (login) {
    throw new MyError("Login already in use", 422);
  }
  const email = await userRepository.get({ where: { login: object.email } });
  if (email) {
    throw new MyError("Email already in use", 422);
  }
  return await userRepository.create(object);
};
