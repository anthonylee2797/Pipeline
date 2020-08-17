const mongoose = require('mongoose');
require('dotenv').config();

const myURI = process.env.MONGO_URI;
mongoose
  .connect(myURI)
  .then(() => console.log('connected to mongo'))
  .catch((err) => console.err(`Error at mongo connection`, err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  jobs: {
    type: Array,
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = { userModel };
