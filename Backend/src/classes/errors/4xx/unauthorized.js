const errorsInfo = require("../../errorInfo");

/**
 * It is returned by the server if authentication is required to access the requested resource.
 */
module.exports = class Unauthorized extends (
  Error
) {
  constructor(message = errorsInfo.ERR_401_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_401_NAME;
    this.status = 401;
  }
};
