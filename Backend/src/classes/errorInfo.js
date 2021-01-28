const ERR_400_NAME = "BadRequest";
const ERR_400_MESSAGE = "The request contains a syntax error";
const ERR_401_NAME = "Unauthorized";
const ERR_401_MESSAGE =
  "To access the requested resource requires authentication";
const ERR_404_NAME = "NotFound";
const ERR_404_MESSAGE = "The resource is not found";
const ERR_409_NAME = "Conflict";
const ERR_409_MESSAGE =
  "The request could not be completed due to conflicting access to the resource";
const ERR_410_NAME = "Gone";
const ERR_410_MESSAGE =
  "The resource has been deleted and is no longer available";
const ERR_422_NAME = "UnprocessableEntity";
const ERR_422_MESSAGE =
  "Server cannot process the request because there is a logical error in a sent data";
const ERR_449_NAME = "RetryWith";
const ERR_449_MESSAGE = "Did not enough information";
const ERR_500_NAME = "InternalServerError";
const ERR_500_MESSAGE = "Internal server error";
const ERR_501_NAME = "NotImplemented";
const ERR_501_MESSAGE =
  "The server does not support capabilities required to process the request";

module.exports = {
  ERR_400_NAME,
  ERR_400_MESSAGE,
  ERR_401_NAME,
  ERR_401_MESSAGE,
  ERR_404_NAME,
  ERR_404_MESSAGE,
  ERR_409_NAME,
  ERR_409_MESSAGE,
  ERR_410_NAME,
  ERR_410_MESSAGE,
  ERR_422_NAME,
  ERR_422_MESSAGE,
  ERR_449_NAME,
  ERR_449_MESSAGE,
  ERR_500_NAME,
  ERR_500_MESSAGE,
  ERR_501_NAME,
  ERR_501_MESSAGE,
};
