const errorsInfo = require("../../errorInfo");

/**
 * Server cannot process the request because there is a logical error in a sent data.
 */
module.exports = class UnprocessableEntity extends (
  Error
) {
  constructor(message = errorsInfo.ERR_422_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_422_NAME;
    this.status = 422;
  }
};
