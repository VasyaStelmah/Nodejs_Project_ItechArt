const errorsInfo = require("../../errorInfo");

/**
 * The request could not be completed due to conflicting access to the resource.
 */
module.exports = class Conflict extends (
  Error
) {
  constructor(message = errorsInfo.ERR_409_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_409_NAME;
    this.status = 409;
  }
};
