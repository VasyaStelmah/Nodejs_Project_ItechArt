const productRepository = require("../repositories/product");
const errorMessage = require("../errors/error");

module.exports.getAll = async function () {
  return await productRepository.getAll();
};
module.exports.getById = async function (id) {
  const product = await productRepository.getById({
    where: { id: id },
  });
  if (!product) {
    throw new errorMessage("Product is not found", 404);
  }
  return product;
};
module.exports.updateById = async function (id, object) {
  const description = await productRepository.get({
    where: { description: object.description },
  });
  if (description) {
    throw new errorMessage("Description already in use", 422);
  }
  const name = await productRepository.get({ where: { name: object.name } });
  if (name) {
    throw new errorMessage("Name already in use", 422);
  }
  const user = await productRepository.getById({ where: { id: id } });
  if (!user) {
    throw new errorMessage("User is not found", 404);
  }
  return await productRepository.updateById(id, object);
};
module.exports.removeById = async function (id) {
  const user = await productRepository.removeById({
    where: { id: id },
  });
  if (!user) {
    throw new errorMessage("Product is not found", 404);
  }
  return user;
};
module.exports.create = async function (id) {
  const name = await productRepository.get({ where: { name: object.name } });
  if (name) {
    throw new errorMessage("Name already in use", 422);
  }
  const description = await productRepository.get({
    where: { description: object.description },
  });
  if (description) {
    throw new errorMessage("Description already in use", 422);
  }

  const user = await productRepository.getById({ where: { id: id } });
  if (!user) {
    throw new errorMessage("User is not found", 404);
  }
  return await productRepository.create(object);
};
module.exports.getSortAscName = async function (id) {
  const user = await productRepository.sort({
    order: [["name", "ASC"]],
  });
  if (!user) {
    throw new errorMessage("Product is not found", 404);
  }
  return user;
};
module.exports.getSortDescName = async function (id) {
  const user = await productRepository.sort({
    order: [["name", "DESC"]],
  });
  if (!user) {
    throw new errorMessage("Product is not found", 404);
  }
  return user;
};
module.exports.getSortAscPrice = async function (id) {
  const user = await productRepository.sort({
    order: [["price", "ASC"]],
  });
  if (!user) {
    throw new errorMessage("Product is not found", 404);
  }
  return user;
};
module.exports.getSortDescPrice = async function (id) {
  const user = await productRepository.sort({
    order: [["price", "ASC"]],
  });
  if (!user) {
    throw new errorMessage("Product is not found", 404);
  }
  return user;
};
