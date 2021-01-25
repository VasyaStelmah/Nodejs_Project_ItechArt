const Joi = require("joi");
module.exports.create = function (request, response, next) {
  const schema = Joi.object({
    last_name: Joi.string().min(3).max(15).required(),
    name: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().min(3).max(30).required(),
    login: Joi.string().min(3).max(15).required(),
    password: Joi.string().min(3).max(30).required(),
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
