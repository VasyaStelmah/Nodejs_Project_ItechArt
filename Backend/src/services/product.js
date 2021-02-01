const productRepository = require("../repositories/product");
const NotFound = require("../classes/errors/4xx/NotFound");
const UnprocessableEntity = require("../classes/errors/4xx/unprocessableEntity");
const { Op } = require("sequelize");

module.exports.getAll = async function () {
  return await productRepository.getAll();
};
module.exports.getOnlyWithImage = async function () {
  return await productRepository.get({
    where: {
      image: {
        [Op.not]: "",
      },
    },
  });
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
module.exports.sort = async function (object) {
  const user = await productRepository.sort(object);
  if (!user) {
    throw new NotFound("Product is not found");
  }
  return user;
};
module.exports.getByNameTag = async function (name) {
  const nameTag = await productRepository.getByNameTag(name);
  if (!nameTag) {
    throw new NotFound("Name tag is not found");
  }
  return user;
};
module.exports.updateByIdTag = async function (id, object) {
  const tag = await productRepository.updateByIdTag(id, object);
  if (!tag) {
    throw new NotFound("Tag is not found");
  }
  return user;
};
module.exports.createTag = async function (object) {
  const tag = await productRepository.createTag(object);
  return tag;
};
module.exports.removeByIdTag = async function (id) {
  const tag = await productRepository.removeByIdTag(id);
  if (!tag) {
    throw new NotFound("Tag for deleting is not found");
  }
  return tag;
};
