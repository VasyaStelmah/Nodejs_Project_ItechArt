const Products = require("../models/products");
module.exports.getAll = async function () {
  return await Products.findAll();
};
module.exports.get = async function (object) {
  return await Products.findAll(object);
};
module.exports.getById = async function (id) {
  return await Products.findOne(id);
};
module.exports.updateById = async function (id, object) {
  return await Products.update(object, {
    where: { id: id },
  });
};
module.exports.removeById = async function (id) {
  return await Products.destroy({
    where: { id: id },
  });
};
module.exports.create = async function (object) {
  return await Products.create(object);
};
module.exports.sort = async function (object) {
  return await Products.findAll(object);
};
