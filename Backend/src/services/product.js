const productRepository = require("../repositories/product");
const NotFound = require("../classes/errors/4xx/NotFound");
const UnprocessableEntity = require("../classes/errors/4xx/unprocessableEntity");

module.exports.getAll = async function () {
  return await productRepository.getAll();
};
module.exports.getById = async function (id) {
  const product = await productRepository.getById({
    where: { id: id },
  });
  if (!product) {
    throw new NotFound("Product is not found");
  }
  return product;
};
module.exports.updateById = async function (id, object) {
  const description = await productRepository.get({
    where: { description: object.description },
  });
  if (description) {
    throw new UnprocessableEntity("Description already in use");
  }
  const name = await productRepository.get({ where: { name: object.name } });
  if (name) {
    throw new UnprocessableEntity("Name already in use");
  }
  const user = await productRepository.getById({ where: { id: id } });
  if (!user) {
    throw new NotFound("Product is not found");
  }
  return await productRepository.updateById(id, object);
};
module.exports.removeById = async function (id) {
  const user = await productRepository.removeById({
    where: { id: id },
  });
  if (!user) {
    throw new NotFound("Product is not found");
  }
  return user;
};
module.exports.create = async function (id) {
  const name = await productRepository.get({ where: { name: object.name } });
  if (name) {
    throw new UnprocessableEntity("Name already in use");
  }
  const description = await productRepository.get({
    where: { description: object.description },
  });
  if (description) {
    throw new UnprocessableEntity("Description already in use");
  }

  const user = await productRepository.getById({ where: { id: id } });
  if (!user) {
    throw new NotFound("Product is not found");
  }
  return await productRepository.create(object);
};
module.exports.getSortAscName = async function (id) {
  const user = await productRepository.sort({
    order: [["name", "ASC"]],
  });
  if (!user) {
    throw new NotFound("Product is not found");
  }
  return user;
};
module.exports.getSortDescName = async function (id) {
  const user = await productRepository.sort({
    order: [["name", "DESC"]],
  });
  if (!user) {
    throw new NotFound("Product is not found");
  }
  return user;
};
module.exports.getSortAscPrice = async function (id) {
  const user = await productRepository.sort({
    order: [["price", "ASC"]],
  });
  if (!user) {
    throw new NotFound("Product is not found");
  }
  return user;
};
module.exports.getSortDescPrice = async function (id) {
  const user = await productRepository.sort({
    order: [["price", "ASC"]],
  });
  if (!user) {
    throw new NotFound("Product is not found");
  }
  return user;
};
