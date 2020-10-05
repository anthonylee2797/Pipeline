const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

const feedController = require('./controllers/feedController');
const authController = require('./controllers/authController');

//  pipeline functionality
app.get('/getjobs', feedController.getJobs, (req, res) => {
  res.status(200);
});

app.post('/postJob', feedController.postJobs, (req, res) => {
  res.status(200).end('Job has been posted');
});

app.put('/editJob', feedController.editJob, (req, res) => {
  res.status(200).end('jobs have been edited');
});

// authorization
app.post('/createUser', authController.createUser, (req, res) => {
  res.status(200).end('User has been created');
});

app.post('/checkUser', authController.checkUser, (req, res) => {
  res.status(200).end('User has signed in');
});

app.use(express.static('client/build'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
