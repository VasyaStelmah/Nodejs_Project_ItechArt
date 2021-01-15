const Joi = require('joi');
module.exports.login = function(request, response, next) {
      const schema = Joi.object({
        email: Joi.string().email().min(3).max(30).required(),
        password: Joi.string().min(3).max(30).required()}
        );
      const validation = schema.validate(request.body);
      if(!validation.error){
          next();
      } else {
        response.status(400).json({
          message: validation.error.details[0].message
        });
      }
  };
  module.exports.register = function(request, response, next) {
    const schema = Joi.object({
      last_name: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().email().min(3).max(30).required(),
      login: Joi.string().min(3).max(10).required(),
      password:Joi.string().min(3).max(30).required()
    });
    const validation = schema.validate(request.body);
    if(!validation.error){
        next();
    } else {
      response.status(400).json({
        message: validation.error.details[0].message
      });
    }
};