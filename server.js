const express = require('express');
const api = require('./public/assets/Node JS/timeZone');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

let data, nextFiveHrs;

app.post('/all-data', (req, res) => {
  data = api.allTimeZones();
  res.json(data);
});

app.post('/next-five-hours', (req, res) => {
  const cityName = req.body.cityName;
  let cityDateTimeObj = api.timeForOneCity('Nome');
  let nextFiveHrs = api.nextNhoursWeather(
    cityDateTimeObj.city_Date_Time_Name,
    4,
    data
  );
  res.json(nextFiveHrs);
});

app.listen(process.env.PORT || 3030, () =>
  console.log('listening on port 3030')
);
