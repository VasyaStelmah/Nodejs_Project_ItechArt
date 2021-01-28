const errorsInfo = require("../../errorInfo");

/**
 * It is returned by the server if a syntax error is detected in a client request.
 */
module.exports = class BadRequest extends (
  Error
) {
  constructor(message = errorsInfo.ERR_400_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_400_NAME;
    this.status = 400;
  }
};
