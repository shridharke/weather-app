const express = require('express');
var axios = require('axios');

const app = express();

app.use(express.static('public'));
app.use(express.json());

// app.set('views', './views');
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

let data, nextFiveHrs;

app.post('/all-data', (req, res) => {
  var configAllData = {
    method: 'get',
    url: 'https://soliton.glitch.me/all-timezone-cities',
    headers: {},
  };
  axios(configAllData)
    .then(function (response) {
      data = response.data;
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post('/next-five-hours', (req, res) => {
  const cityName = req.body.cityName;
  var configCityName = {
    method: 'get',
    url: `https://soliton.glitch.me?city=${cityName}`,
    headers: {},
  };
  axios(configCityName)
    .then(function (response) {
      let resObj = response.data;
      var raw = JSON.stringify({ ...resObj, hours: 4 });

      var config = {
        method: 'post',
        url: 'https://soliton.glitch.me/hourly-forecast',
        headers: {
          'Content-Type': 'application/json',
        },
        data: raw,
      };

      axios(config)
        .then(function (resp) {
          nextFiveHrs = resp.data;
          res.json(resp.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(process.env.PORT || 3030, () =>
  console.log('listening on port 3030')
);
