const users = require("../models/userModel");
const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      messase: "user data returned",
     
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };
