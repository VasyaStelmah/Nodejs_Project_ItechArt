const Joi = require("joi");
module.exports.create = function (request, response, next) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    description: Joi.string().min(3).max(150).required(),
    price: Joi.number().required(),
    image: Joi.string().min(3).max(150).required(),
    quantity: Joi.number().required(),
  });
  const validation = schema.validate(request.body);
  if (!validation.error) {
    next();
  } else {
    response.status(400).json({
      message: validation.error.details[0].message,
    });
  }
};
