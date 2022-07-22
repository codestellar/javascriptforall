const CustomError = require('./custom-error');
const { StatusCodes } = require("http-status-codes");

class InternalServerError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

module.exports = InternalServerError;
