// Importing Modules
const express = require('express');
const { fork } = require('child_process');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// Rendering index.html when / route is called
app.get('/', (req, res) => {
  res.render('index');
});

// post route for getting all data
app.post('/all-data', (req, res) => {
  const child = fork('./thread.js');
  child.send('all-data');
  child.on('message', (allData) => {
    res.json(allData);
  });
});

// post route for getting next five hours for selected city
app.post('/next-five-hours', (req, res) => {
  const cityName = req.body.cityName;
  const child = fork('./thread.js');
  child.send({ city: cityName });
  child.on('message', (nextData) => {
    res.json(nextData);
  });
});

// App listening on Port 3030
app.listen(process.env.PORT || 3030, () =>
  console.log('listening on port 3030')
);
