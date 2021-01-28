const errorHandler = require("../errors/errorHandler");
const productService = require("../services/product");
const responseStatus = require("../helpers/responseStatus");
const averageFunction = require("../middleware/averageMark");
const Marks = require("../models/marks");
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../models/connect");
const Products = require("../models/products");
const NotFound = require("../classes/errors/4xx/NotFound");

module.exports.getAll = async function (request, response, next) {
  try {
    const object = await productService.getAll();
    response.status(200).json({
      marks: responseStatus.build(getProductId, "Get marks", 200),
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
module.exports.rating = async function (request, response, next) {
  try {
    const getProduct = await Marks.findAll({
      where: {
        product_id: request.params.id,
        user_id: request.cookies.id_user,
      },
    });
    if (getProduct) {
      const markUpdate = await Marks.update(
        {
          product_id: request.params.id,
          user_id: request.cookies.id_user,
          mark: request.params.number,
        },
        {
          where: {
            product_id: request.params.id,
            user_id: request.cookies.id_user,
          },
        }
      );
    }
    if (Object.keys(getProduct).length == 0) {
      const markCreate = await Marks.create({
        product_id: request.params.id,
        user_id: request.cookies.id_user,
        mark: request.params.number,
      });
    }
    const getAllMarks = await Marks.findAll({
      attributes: ["product_id", "user_id", "mark"],
      where: {
        product_id: request.params.id,
      },
    });
    const getAllMarksArray = JSON.parse(JSON.stringify(getAllMarks));
    function sumMarks() {
      let sum = 0;
      for (let i = 0; i < getAllMarksArray.length; i++) {
        sum += getAllMarksArray[i].mark;
      }
      return ((sum + 0.01) / getAllMarksArray.length).toFixed(1);
    }
    const updateAverageMark = await Products.update(
      {
        average_mark: sumMarks(),
      },
      { where: { id: request.params.id } }
    );
    if (updateAverageMark == 0) {
      throw new NotFound(`Product id=${request.params.id} is not found`);
    }
    response.status(200).json({
      body: responseStatus.build(
        updateAverageMark,
        `Update rating product id ${request.params.id}`,
        201
      ),
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
