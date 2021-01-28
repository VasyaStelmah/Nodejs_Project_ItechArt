const errorsInfo = require("../../errorInfo");

/**
 * The server does not support the capabilities required to process the request.
 * For example, the server does not understand the method specified in the request.
 */
module.exports = class NotImplemented extends (
  Error
) {
  constructor(message = errorsInfo.ERR_501_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_501_NAME;
    this.status = 501;
  }
};
