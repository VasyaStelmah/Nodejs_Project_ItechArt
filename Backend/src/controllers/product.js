const errorHandler = require("../errors/errorHandler");
const productService = require("../services/product");
const responseStatus = require("../helpers/responseStatus");

module.exports.getAll = async function (request, response, next) {
  try {
    const object = await productService.getAll();
    response.status(200).json({
      body: responseStatus.build(object, "Get all products", 200),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.getById = async function (request, response, next) {
  try {
    const object = await productService.getById(request.params.id);
    response.status(200).json({
      body: responseStatus.build(object, "Get by id product", 200),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.removeById = async function (request, response, next) {
  try {
    const object = await productService.removeById(request.params.id);
    response.status(200).json({
      body: responseStatus.build(object, "Delete by id product", 200),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.updateById = async function (request, response, next) {
  try {
    const object = await productService.updateById(request.params.id, {
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      image: request.body.image,
      quantity: request.body.quantity,
    });
    response.status(200).json({
      body: responseStatus.build(object, "Update by id product", 200),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.create = async function (request, response, next) {
  try {
    const object = await productService.create({
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      image: request.body.image,
      quantity: request.body.quantity,
    });
    response.status(201).json({
      body: responseStatus.build(object, "Create product", 201),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.getSortAscName = async function (request, response, next) {
  try {
    const object = await productService.getSortAscName();
    response.status(200).json({
      body: responseStatus.build(object, "Sort by Asc name product", 200),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.getSortDescName = async function (request, response, next) {
  try {
    const object = await productService.getSortDescName();
    response.status(200).json({
      body: responseStatus.build(object, "Sort by Desc name product", 200),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.getSortAscPrice = async function (request, response, next) {
  try {
    const object = await productService.getSortAscPrice();
    response.status(200).json({
      body: responseStatus.build(object, "Sort by Asc price product", 200),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
module.exports.getSortDescPrice = async function (request, response, next) {
  try {
    const object = await productService.getSortDescPrice();
    response.status(200).json({
      body: responseStatus.build(object, "Sort by Desc price product", 200),
    });
  } catch (error) {
    errorHandler(response, error);
  }
};
