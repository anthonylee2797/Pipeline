const { userModel } = require('../models/userModel');
require('dotenv').config();

const authController = {
  createUser(req, res, next) {
    console.log('creating user');

    const { username, password } = req.body;

    // res.locals.password = req.body.password;
    userModel.create({ username, password }, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        next();
      }
    });
  },
  checkUser(req, res, next) {
    console.log('checking user');

    const { username, password } = req.body;

    userModel.findOne({ username: username, password: password }, (err, data) => {
      if (!data) {
        res.sendStatus(404);
      } else {
        return res.json(data);
      }
    });
  },
};

module.exports = authController;
