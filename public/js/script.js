/*------------------------------------------------DATA-------------------------------------------------------*/

//Fetching Data of all timezone and cities
var requestOptions = {
  method: 'POST',
  redirect: 'follow',
};

let data = {};
fetch('/all-data', requestOptions)
  .then((response) => response.json())
  .then((jData) =>
    jData.forEach((item) => (data[item.cityName.toLowerCase()] = item))
  )
  .then((res) => initialise())
  .catch((error) => console.log('error', error));

/**
 * @desc Fetching Next Five Hour Values of Cities
 * @param {String} cityName Current Selected City Name
 */
function getNextValues(cityName) {
  var requestOptionsNext = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cityName: cityName }),
  };

  fetch('/next-five-hours', requestOptionsNext)
    .then((response) => response.json())
    .then((resdata) => (selectedCity.nextFiveHrs = resdata.temperature))
    .then((res) => selectedCity.changeTimeline())
    .catch((error) => console.log('error', error));
}

/*---------------------------------------------OOP SECTION-------------------------------------------------------*/

// Base Prototype containing all necessary functions
class basePrototype {
  constructor() {}
  // City Icon Change Function
  changeCityIcon() {
    let cityIcon = document.getElementsByClassName('city-icon');
    cityIcon[0].setAttribute(
      'src',
      `./assets/htmlcss/Icons for cities/${this.cityName.toLowerCase()}.svg`
    );
  }
  // Temperature Grid Change Function
  changeTempGrid() {
    let tempC = document.getElementsByClassName('tempC')[0];
    let tempF = document.getElementsByClassName('tempF')[0];
    let humidity = document.getElementsByClassName('humiValue')[0];
    let precipitation = document.getElementsByClassName('preciValue')[0];
    humidity.innerHTML = this.humidity;
    precipitation.innerHTML = this.precipitation;
    tempC.innerHTML = this.temperature;
    tempF.innerHTML = tempCtoF(this.temperature) + '°F';
  }
  // Timeline Change Function
  changeTimeline() {
    [date, time, mState] = [...this.dateAndTime.split(' ')];
    [hours, minutes, seconds] = [...time.split(':')];
    let temperatures = this.nextFiveHrs;
    let timeline = document.getElementsByClassName('header-item-3')[0];
    let now = timeline.childNodes[1];
    now.childNodes[1].innerHTML = 'NOW';
    now.childNodes[5].setAttribute(
      'src',
      getWeatherIcon(parseInt(this.temperature.split('°')[0]))
    );
    now.childNodes[7].innerHTML = this.temperature;
    for (let i = 1; i < timeline.childElementCount; i++) {
      let element = timeline.childNodes[2 * i + 1];
      let temp = temperatures[i - 1];
      element.childNodes[1].innerHTML = getTimelineTime(i, hours, mState);
      element.childNodes[5].setAttribute(
        'src',
        getWeatherIcon(parseInt(temp.split('°')[0]))
      );
      element.childNodes[7].innerHTML = temp;
    }
  }
  // Updating Top Section Clock
  updateTime() {
    let timeDisplay = document.getElementsByClassName('time-display')[0];
    let dateDisplay = document.getElementsByClassName('date-display')[0];
    clearInterval(timeUpdateID);
    timeUpdateID = setInterval(() => {
      let newTimeObj = new Date(
        new Date(this.dateAndTime).getTime() + totalTime
      ).toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      [date, time, mState] = [...newTimeObj.split(' ')];
      [hours, minutes, seconds] = [...time.split(':')];
      timeDisplay.innerHTML = `${hours}:${minutes}:<small>${seconds}</small>
  <img
    class="am-state-icon"
    src="./assets/htmlcss/General Images & Icons/${
      mState === 'AM' ? 'am' : 'pm'
    }State.svg"
    alt="${mState}"
  />`;
      dateDisplay.innerHTML = getDate(date);
    }, 1000);
  }
}

// City Constructor for having the properties of current selected city
class SelectedCityClass extends basePrototype {
  constructor(key) {
    super();
    this.cityName = data[key].cityName;
    this.dateAndTime = data[key].dateAndTime;
    this.timeZone = data[key].timeZone;
    this.temperature = data[key].temperature;
    this.humidity = data[key].humidity;
    this.precipitation = data[key].precipitation;
    this.nextFiveHrs;
  }
}

/*---------------------------------------------RENDER SECTION-------------------------------------------------------*/

let city = document.getElementById('city-input');
let cityDrop = document.getElementById('city-dropdown');
let timeDisplay = document.getElementsByClassName('time-display');
let selectedCity = null;
let cardList;

// Render All Cards and Grid Items and Dropdown
function initialise() {
  // Adding all cities in the dropdown
  cardList = Object.keys(data);
  for (const cityKey in data) {
    let cityObject = data[cityKey];
    let cityElement = document.createElement('option');
    cityElement.setAttribute('value', cityObject.cityName);
    cityDrop.appendChild(cityElement);
  }

  //Render All Cards
  cardList.forEach((key, index) => {
    let cityDetails = data[key];
    let card = document.createElement('li');
    card.setAttribute('class', 'card');
    card.classList.add(`card-${index}`);
    card.innerHTML = `<div class="card-title">
        <h3>${cityDetails.cityName}</h3>
        <h3>
          <img
            class="card-icon"
            src=${getCardWeatherIcon(cityDetails.temperature)}
            alt=""
          />
          ${cityDetails.temperature}
        </h3>
      </div>
      <div class="card-content">
        <h5 class="card-time">${getCardTime(cityDetails.dateAndTime)}</h5>
        <h5 class="card-date">${getCardDate(cityDetails.dateAndTime)}</h5>
        <p>
          <img
            class="card-icon"
            src="./assets/htmlcss/Weather Icons/humidityIcon.svg"
            alt=""
          />
          ${cityDetails.humidity}
        </p>
        <p>
          <img
            class="card-icon"
            src="./assets/htmlcss/Weather Icons/precipitationIcon.svg"
            alt=""
          />
          ${cityDetails.precipitation}
        </p>
      </div>`;
    card.style.backgroundImage = `url('../assets/htmlcss/Icons for cities/${key}.svg')`;
    cardContainer.appendChild(card);
  });

  //Render All GRid Items
  cardList.forEach((key, index) => {
    let cityDetails = data[key];
    let contItem = document.createElement('li');
    contItem.setAttribute('class', 'cont-item');
    contItem.innerHTML = `<div class="cont-item-title">
        <div class="cont-name">${cityDetails.timeZone.split('/')[0]}</div>
        <div class="cont-temp">
          <img
            class="cont-temp-icon"
            src=${getWeatherIcon(
              parseInt(cityDetails.temperature.split('°')[0])
            )}
            alt=""
          />
          ${cityDetails.temperature}
        </div>
      </div>
      <div class="cont-content">
        <div class="cont-city-name">${cityDetails.cityName},&nbsp;${getCardTime(
      cityDetails.dateAndTime
    )}</div>
        <div class="cont-humidity">
          <img
            src="./assets/htmlcss/Weather Icons/humidityIcon.svg"
            alt=""
            class="cont-humidity-icon"
          />
          ${cityDetails.humidity}
        </div>
      </div>`;
    contGrid.appendChild(contItem);
  });
}

/*---------------------------------------------TOP SECTION-------------------------------------------------------*/

city.addEventListener('focus', () => {
  city.value = '';
});

// On change listener for tracking input change
city.addEventListener('change', () => {
  let key = city.value.toLowerCase();
  if (!cardList.includes(key)) {
    let cityIcon = document.getElementsByClassName('city-icon');
    cityIcon[0].setAttribute(
      'src',
      `./assets/htmlcss/General%20Images%20&%20Icons/warning.svg`
    );
    city.value = 'Select Valid City';
    city.blur();
    return;
  }
  // New Object Created for city change
  selectedCity = new SelectedCityClass(key);
  getNextValues(city.value);
  selectedCity.changeCityIcon();
  selectedCity.changeTempGrid();
  selectedCity.updateTime();
  city.blur();
});

/**
 * @desc Convert Temperature from Celsius to Fahrenheit
 * @param {String} tempInC Temperature in Degree Celsius
 * @returns {Integer} Temperature in Fahrenheit
 */
const tempCtoF = (tempInC) =>
  Math.floor((parseInt(tempInC.split('°')[0]) * 9) / 5 + 32);

/**
 * @desc Formatting Input String
 * @param {String} date City Date
 * @returns {String} Formatted Date
 */
const getDate = (date) => {
  [month, day, year] = [...date.slice(0, -1).split('/')];
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${day}-${months[parseInt(month) - 1]}-${year}`;
};

/**
 * @desc To get all the time values for the timeline
 * @param {Integer} i The i'th value in timeline which needs to be calculated
 * @param {String} hours The Current Time in the City
 * @param {String} mState The Current AM or PM State
 * @returns Formatted time for i'th value
 */
const getTimelineTime = (i, hours, mState) => {
  let acthours = parseInt(hours);
  hours = acthours + i;
  if (hours >= 12) {
    if (hours > 12) {
      hours -= 12;
    }
    if (acthours != 12) {
      mState = mState === 'AM' ? 'PM' : 'AM';
    }
  }
  return `${hours} ${mState}`;
};

/**
 * @desc For getting the source url of weather icon
 * @param {Integer} temp Temperature of the City
 * @returns {String} the source url of the weather icon for input temperature
 */
const getWeatherIcon = (temp) =>
  `./assets/htmlcss/Weather%20Icons/${
    temp < 0
      ? 'snowflakeIcon'
      : temp < 18
      ? 'rainyIcon'
      : temp <= 22
      ? 'windyIcon'
      : temp <= 29
      ? 'cloudyIcon'
      : 'sunnyIcon'
  }.svg`;

/*---------------------------------------------MIDDLE SECTION-------------------------------------------------------*/

const buttonRight = document.getElementById('slide-right');
const buttonLeft = document.getElementById('slide-left');

// Slider Functionality and Animation
buttonRight.onclick = function () {
  slide('right');
};
buttonLeft.onclick = function () {
  slide('left');
};

/**
 * Slides the Container in the direction specified
 * @param {String} direction Direction of Sliding Left or Right
 */
const slide = (direction) => {
  let container = document.getElementsByClassName('card-container')[0];
  scrollCompleted = 0;
  let slideVar = setInterval(function () {
    if (direction == 'left') {
      container.scrollLeft -= 20;
    } else {
      container.scrollLeft += 20;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
};

/**
 * @desc For getting src URL of the weather icon
 * @param {String} temp Temperture for which Icon is needed
 * @returns {String} Source URL for the weather icon for Input temperature
 */
const getCardWeatherIcon = (temp) => {
  let temper = parseInt(temp.split('°')[0]);
  return `./assets/htmlcss/Weather%20Icons/${
    temper < 20 ? 'rainyIcon' : temper < 30 ? 'snowflakeIcon' : 'sunnyIcon'
  }.svg`;
};

/**
 * @desc Formatting Card Time
 * @param {String} datetime Unformatted Date and Time String
 * @returns {String} Formatted String for Card Time
 */
const getCardTime = (datetime) => {
  [date, time, mState] = [...datetime.split(' ')];
  [hours, minutes, seconds] = [...time.split(':')];
  return `${hours}:${minutes}&nbsp;${mState}`;
};

/**
 * Formatting Date for Cards
 * @param {String} datetime Unformatted Date and Time String
 * @returns {String} Formatted Date for Card
 */
const getCardDate = (datetime) => {
  [date, time, mState] = [...datetime.split(' ')];
  [hours, minutes, seconds] = [...time.split(':')];
  return getDate(date);
};

let displayNumber = document.getElementById('display-number');
var length = displayNumber.value;
var weather;
let cardContainer = document.getElementsByClassName('card-container')[0];

// Display Number Change
displayNumber.addEventListener('change', () => {
  if (displayNumber.value > 10) {
    displayNumber.value = 10;
  } else if (displayNumber.value < 3) {
    displayNumber.value = 3;
  }
  length = displayNumber.value;
  updateCities();
  isOverflow();
});

// Filter Controls Function
let sunnySelect = document.getElementById('sunny-select');
let snowflakeSelect = document.getElementById('snowflake-select');
let rainySelect = document.getElementById('rainy-select');

sunnySelect.onclick = () => {
  weather = 'sunny';
  updateCities();
  if (!sunnySelect.classList.contains('selected')) {
    sunnySelect.classList.add('selected');
    if (rainySelect.classList.contains('selected')) {
      rainySelect.classList.remove('selected');
    }
    if (snowflakeSelect.classList.contains('selected')) {
      snowflakeSelect.classList.remove('selected');
    }
  }
};

snowflakeSelect.onclick = () => {
  weather = 'snowflake';
  updateCities();
  if (!snowflakeSelect.classList.contains('selected')) {
    snowflakeSelect.classList.add('selected');
    if (sunnySelect.classList.contains('selected')) {
      sunnySelect.classList.remove('selected');
    }
    if (rainySelect.classList.contains('selected')) {
      rainySelect.classList.remove('selected');
    }
  }
};

rainySelect.onclick = () => {
  weather = 'rainy';
  updateCities();
  if (!rainySelect.classList.contains('selected')) {
    rainySelect.classList.add('selected');
    if (sunnySelect.classList.contains('selected')) {
      sunnySelect.classList.remove('selected');
    }
    if (snowflakeSelect.classList.contains('selected')) {
      snowflakeSelect.classList.remove('selected');
    }
  }
};

// Card Update Based on Selected Values
const updateCities = () => {
  let param = weather;
  let renderList = cardList.filter((key) => {
    let temper = parseInt(data[key].temperature.split('°')[0]);
    if (param == 'sunny') {
      return temper > 29;
    } else if (param == 'snowflake') {
      return temper <= 29 && temper >= 20;
    } else {
      return temper < 20;
    }
  });
  renderList.sort((a, b) => {
    if (param == 'sunny') {
      return (
        parseInt(data[b].temperature.split('°')[0]) -
        parseInt(data[a].temperature.split('°')[0])
      );
    } else if (param == 'snowflake') {
      return (
        parseInt(data[b].precipitation.split('%')[0]) -
        parseInt(data[a].precipitation.split('%')[0])
      );
    } else {
      return (
        parseInt(data[b].humidity.split('%')[0]) -
        parseInt(data[a].humidity.split('%')[0])
      );
    }
  });
  if (renderList.length < length) {
    length = renderList.length;
    displayNumber.value = length;
  }
  let cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none';
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < cards.length; j++) {
      if (
        cards[j].childNodes[0].childNodes[1].textContent.toLowerCase() ===
        renderList[i]
      ) {
        cards[j].style.display = 'initial';
        cards[j].style.order = i;
      }
    }
  }
  isOverflow();
};

// Hide/Show Arrows and Center cards if not overflowing
const isOverflow = () => {
  element = document.getElementsByClassName('card-container')[0];
  if (
    !(
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    )
  ) {
    buttonLeft.style.visibility = 'hidden';
    buttonRight.style.visibility = 'hidden';
    element.style.justifyContent = 'center';
  } else {
    buttonLeft.style.visibility = 'visible';
    buttonRight.style.visibility = 'visible';
    element.style.justifyContent = 'normal';
  }
};

/*---------------------------------------------BOTTOM SECTION-------------------------------------------------------*/

let contGrid = document.getElementsByClassName('cont-grid')[0];

// Grid Sort Controls Listener
let contNameSort = document.getElementById('cont-name-sort');
let tempSort = document.getElementById('temp-sort');
let contSortIcon = document.getElementById('cont-name-sort-icon');
let tempSortIcon = document.getElementById('temp-sort-icon');
var tempState = 'des',
  contState = 'asc';

contNameSort.addEventListener('click', () => {
  contState === 'asc' ? (contState = 'des') : (contState = 'asc');
  contSortIcon.style.transform === 'rotate(180deg)'
    ? (contSortIcon.style.transform = 'rotate(-360deg)')
    : (contSortIcon.style.transform = 'rotate(180deg)');
  updateGrid();
});

tempSort.addEventListener('click', () => {
  tempState === 'asc' ? (tempState = 'des') : (tempState = 'asc');
  tempSortIcon.style.transform === 'rotate(180deg)'
    ? (tempSortIcon.style.transform = 'rotate(-360deg)')
    : (tempSortIcon.style.transform = 'rotate(180deg)');
  updateGrid();
});

// Update Grid based on selected Values
const updateGrid = () => {
  let renderList = cardList;
  renderList.sort((a, b) => {
    let contA = data[a].timeZone.split('/')[0];
    let contB = data[b].timeZone.split('/')[0];
    if (contState === 'asc' && tempState === 'asc') {
      return (
        contA.localeCompare(contB) ||
        parseInt(data[a].temperature.split('°')[0]) -
          parseInt(data[b].temperature.split('°')[0])
      );
    } else if (contState === 'asc' && tempState === 'des') {
      return (
        contA.localeCompare(contB) ||
        parseInt(data[b].temperature.split('°')[0]) -
          parseInt(data[a].temperature.split('°')[0])
      );
    } else if (contState === 'des' && tempState === 'asc') {
      return (
        contB.localeCompare(contA) ||
        parseInt(data[a].temperature.split('°')[0]) -
          parseInt(data[b].temperature.split('°')[0])
      );
    } else {
      return (
        contB.localeCompare(contA) ||
        parseInt(data[b].temperature.split('°')[0]) -
          parseInt(data[a].temperature.split('°')[0])
      );
    }
  });
  let gridItems = document.getElementsByClassName('cont-item');
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.display = 'none';
  }
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < gridItems.length; j++) {
      if (
        gridItems[j].childNodes[2].childNodes[1].textContent
          .split(',')[0]
          .toLowerCase() === renderList[i]
      ) {
        gridItems[j].style.display = 'initial';
        gridItems[j].style.order = i;
      }
    }
  }
};

/*---------------------------------------------TIME SECTION-------------------------------------------------------*/

var startTime = new Date();
var totalTime;

// Calculate Time Engaged
(() => {
  setInterval(() => {
    var endTime = new Date();
    totalTime = endTime - startTime;
  }, 1000);
})();

var timeUpdateID;
var gridTimeID;
var cardTimeID;

// Updating Card Time
(() => {
  let cardTime = document.getElementsByClassName('card-time');
  let cardDate = document.getElementsByClassName('card-date');
  let cards = document.getElementsByClassName('card');
  clearInterval(cardTimeID);
  cardTimeID = setInterval(() => {
    for (let i = 0; i < cards.length; i++) {
      let newTimeObj = new Date(
        new Date(
          data[
            cards[i].childNodes[0].childNodes[1].textContent.toLowerCase()
          ].dateAndTime
        ).getTime() + totalTime
      ).toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      cardTime[i].innerHTML = getCardTime(newTimeObj);
      cardDate[i].innerHTML = getCardDate(newTimeObj);
    }
  }, 1000);
})();

// Update Grid Time
(() => {
  let gridTime = document.getElementsByClassName('cont-city-name');
  let gridItems = document.getElementsByClassName('cont-item');
  clearInterval(gridTimeID);
  gridTimeID = setInterval(() => {
    for (let i = 0; i < gridItems.length; i++) {
      let cityKey = gridItems[i].childNodes[2].childNodes[1].textContent
        .split(',')[0]
        .toLowerCase();
      let newTimeObj = new Date(
        new Date(data[cityKey].dateAndTime).getTime() + totalTime
      ).toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      gridTime[i].innerHTML = `${data[cityKey].cityName}, ${getCardTime(
        newTimeObj
      )}`;
    }
  }, 1000);
})();
