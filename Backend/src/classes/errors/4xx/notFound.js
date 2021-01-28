const errorsInfo = require("../../errorInfo");
/**
 * It is returned by the server if requested resource is not found at the specified URL.
 */
module.exports = class NotFound extends (
  Error
) {
  constructor(message = errorsInfo.ERR_404_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_404_NAME;
    this.status = 404;
  }
};
