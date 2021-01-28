const errorsInfo = require("../../errorInfo");

/**
 * Any internal server error that is not part of the rest of the class errors.
 */
module.exports = class InternalServerError extends (
  Error
) {
  constructor(message = errorsInfo.ERR_500_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_500_NAME;
    this.status = 500;
  }
};
