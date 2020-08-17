const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// app.post('/login');

// app.get('/getJobs');

// app.post('/createJob');

// [
//   id: sdjf829efj98sdfj,
//   {
//     name: 'amazon',
//     uuid:
//     status: 'completed'
//   },
//   {
//     name: 'google',
//     status: 'completed'
//   },
//   {
//     name: 'google',
//     status: 'completed'
//   }
//   {
//     name: 'bestbuy',
//     status: 'completed'
//   }
// ]

// createJob w/ name -> find user -> iterate user's jobs key -> look for id -> delete by the name

// fetch('/createJob', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(name),
// });

// app.delete('/deleteJob/:id');

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
