const User = require("../users/users");
const jwt = require("jsonwebtoken");

const loginService = async (email) => await User.findOne({ email: email }).select("+password");

const generateToken = (userId) => jwt.sign({ id:userId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = { loginService, generateToken };