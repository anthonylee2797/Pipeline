const { userModel } = require('../models/userModel');
require('dotenv').config();

const feedController = {
  getJobs(req, res, next) {
    console.log('getting jobs');
    db.find()
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err, res) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      });
  },
  async postJobs(req, res, next) {
    console.log('posting Job');
    let userId = '5f4978d7a8bea73158f351fe';
    const { company, status, role, id, color } = req.body;

    try {
      const user = await userModel.findByIdAndUpdate(
        userId,
        {
          $push: {
            jobs: {
              company,
              status,
              role,
              id,
              color,
            },
          },
        },
        { new: true, upsert: true }
      );
      return next();
    } catch (e) {
      console.log('error posting job', e);
    }
  },

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
};

module.exports = feedController;
