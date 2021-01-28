const errorsInfo = require("../../errorInfo");

/**
 * It is returned by the server if there is insufficient information from the client to process the request.
 */
module.exports = class RetryWith extends (
  Error
) {
  constructor(message = errorsInfo.ERR_449_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_449_NAME;
    this.status = 449;
  }
};
