const { userModel } = require('../models/userModel');
require('dotenv').config();

let userId = '5f4978d7a8bea73158f351fe';
const feedController = {
  getJobs(req, res, next) {
    console.log('getting jobs');

    userModel.findById(userId).then((data) => {
      res.json(data);
    });
    return next();
  },
  async postJobs(req, res, next) {
    console.log('posting Job');

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
  async editJob(req, res, next) {
    // const { jobs  = req.body;
    const user = await userModel.findByIdAndUpdate(userId, { jobs: req.body });
    return next();
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
