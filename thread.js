const api = require('time-zone-3012');

/**
 * @desc Function for getting data for all cities
 * @returns {Object} All data for all cities
 */
const getAllData = () => {
  return api.allTimeZones();
};

/**
 * @desc Getting Next N hours value for city
 * @param {String} cityName Selected City Name
 * @returns {Object} Next N hours value for selected city
 */
const getNextValues = (cityName) => {
  let lastData = api.allTimeZones();
  let cityDateTimeObj = api.timeForOneCity(cityName);
  let nextFiveHrs = api.nextNhoursWeather(
    cityDateTimeObj.city_Date_Time_Name,
    4,
    lastData
  );
  return nextFiveHrs;
};

// Handling Process Messages
process.on('message', (message) => {
  if (message === 'all-data') {
    const data = getAllData();
    process.send(data);
  } else {
    let city = message.city;
    const nextData = getNextValues(city);
    process.send(nextData);
  }
});
