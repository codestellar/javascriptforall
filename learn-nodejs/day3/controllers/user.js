const userModel = require("../models/user");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await userModel.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: user.name, token: token });
};

module.exports = register;
