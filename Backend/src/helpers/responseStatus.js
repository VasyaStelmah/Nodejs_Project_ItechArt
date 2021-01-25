module.exports.build = function (object, message, statusCode) {
  return {
    data: object,
    statusCode: statusCode,
    message: message,
  };
};
