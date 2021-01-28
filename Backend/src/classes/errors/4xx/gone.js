const errorsInfo = require("../../errorInfo");

/**
 * It is returned by the server if the resource used at the specified URL, but was deleted and is no longer available.
 */
module.exports = class Gone extends (
  Error
) {
  constructor(message = errorsInfo.ERR_410_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_410_NAME;
    this.status = 410;
  }
};
