const Users = require("../models/users");

module.exports.getAll = async function () {
  return await Users.findAll();
};
module.exports.get = async function (object) {
  return await Users.findAll(object);
};
module.exports.getById = async function (object) {
  return await Users.findOne(object);
};
module.exports.updateById = async function (id, object) {
  return await User.update(object, {
    where: { id: id },
  });
};
module.exports.removeById = async function (id) {
  return await Users.destroy({
    where: { id: id },
  });
};
module.exports.create = async function (object) {
  return await Users.create(object);
};
