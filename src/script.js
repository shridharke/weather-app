/*------------------------------------------------DATA-------------------------------------------------------*/

const data = {
  nome: {
    cityName: 'Nome',
    dateAndTime: '3/31/2020, 9:21:46 PM',
    timeZone: 'America/Nome',
    temperature: '4°C',
    humidity: '91%',
    precipitation: '8%',
    nextFiveHrs: ['6°C', '7°C', '11°C', '2°C'],
  },
  newyork: {
    cityName: 'NewYork',
    dateAndTime: '4/1/2020, 1:21:46 AM',
    timeZone: 'America/New_york',
    temperature: '23°C',
    humidity: '52%',
    precipitation: '46%',
    nextFiveHrs: ['18°C', '20°C', '18°C', '17°C'],
  },
  jamaica: {
    cityName: 'Jamaica',
    dateAndTime: '4/1/2020, 12:21:46 AM',
    timeZone: 'America/Jamaica',
    temperature: '29°C',
    humidity: '39%',
    precipitation: '58%',
    nextFiveHrs: ['24°C', '27°C', '28°C', '24°C'],
  },
  losangeles: {
    cityName: 'LosAngeles',
    dateAndTime: '3/31/2020, 10:21:46 PM',
    timeZone: 'America/Los_Angeles',
    temperature: '23°C',
    humidity: '52%',
    precipitation: '46%',
    nextFiveHrs: ['19°C', '21°C', '23°C', '18°C'],
  },
  winnipeg: {
    cityName: 'Winnipeg',
    dateAndTime: '4/1/2020, 12:21:46 AM',
    timeZone: 'America/Winnipeg',
    temperature: '9°C',
    humidity: '81%',
    precipitation: '18%',
    nextFiveHrs: ['3°C', '7°C', '4°C', '-1°C'],
  },
  juba: {
    cityName: 'Juba',
    dateAndTime: '4/1/2020, 8:21:46 AM',
    timeZone: 'Africa/Juba',
    temperature: '18°C',
    humidity: '62%',
    precipitation: '36%',
    nextFiveHrs: ['37°C', '41°C', '38°C', '37°C'],
  },
  maseru: {
    cityName: 'Maseru',
    dateAndTime: '4/1/2020, 7:21:46 AM',
    timeZone: 'Africa/Maseru',
    temperature: '43°C',
    humidity: '10%',
    precipitation: '86%',
    nextFiveHrs: ['17°C', '17°C', '19°C', '15°C'],
  },
  london: {
    cityName: 'London',
    dateAndTime: '4/1/2020, 6:21:46 AM',
    timeZone: 'Europe/London',
    temperature: '7°C',
    humidity: '85%',
    precipitation: '14%',
    nextFiveHrs: ['-7°C', '-6°C', '-5°C', '-10°C'],
  },
  vienna: {
    cityName: 'Vienna',
    dateAndTime: '4/1/2020, 7:21:46 AM',
    timeZone: 'Europe/Vienna',
    temperature: '10°C',
    humidity: '79%',
    precipitation: '20%',
    nextFiveHrs: ['-1°C', '-1°C', '4°C', '-2°C'],
  },
  moscow: {
    cityName: 'Moscow',
    dateAndTime: '4/1/2020, 8:21:46 AM',
    timeZone: 'Europe/Moscow',
    temperature: '11°C',
    humidity: '77%',
    precipitation: '22%',
    nextFiveHrs: ['12°C', '14°C', '15°C', '8°C'],
  },
  dublin: {
    cityName: 'Dublin',
    dateAndTime: '4/1/2020, 6:21:46 AM',
    timeZone: 'Europe/Dublin',
    temperature: '15°C',
    humidity: '68%',
    precipitation: '30%',
    nextFiveHrs: ['24°C', '28°C', '29°C', '21°C'],
  },
  karachi: {
    cityName: 'Karachi',
    dateAndTime: '4/1/2020, 10:21:46 AM',
    timeZone: 'Asia/Karachi',
    temperature: '25°C',
    humidity: '47%',
    precipitation: '50%',
    nextFiveHrs: ['21°C', '24°C', '21°C', '19°C'],
  },
  kolkata: {
    cityName: 'Kolkata',
    dateAndTime: '4/1/2020, 10:51:46 AM',
    timeZone: 'Asia/Kolkata',
    temperature: '34°C',
    humidity: '29%',
    precipitation: '68%',
    nextFiveHrs: ['33°C', '35°C', '37°C', '32°C'],
  },
  yangon: {
    cityName: 'Yangon',
    dateAndTime: '4/1/2020, 11:51:46 AM',
    timeZone: 'Asia/Yangon',
    temperature: '24°C',
    humidity: '50%',
    precipitation: '48%',
    nextFiveHrs: ['31°C', '32°C', '36°C', '27°C'],
  },
  bangkok: {
    cityName: 'BangKok',
    dateAndTime: '4/1/2020, 12:21:46 PM',
    timeZone: 'Asia/BangKok',
    temperature: '32°C',
    humidity: '33%',
    precipitation: '64%',
    nextFiveHrs: ['32°C', '34°C', '32°C', '32°C'],
  },
  seoul: {
    cityName: 'Seoul',
    dateAndTime: '4/1/2020, 2:21:46 PM',
    timeZone: 'Asia/Seoul',
    temperature: '6°C',
    humidity: '87%',
    precipitation: '12%',
    nextFiveHrs: ['1°C', '1°C', '3°C', '0°C'],
  },
  anadyr: {
    cityName: 'Anadyr',
    dateAndTime: '4/1/2020, 5:21:46 PM',
    timeZone: 'Asia/Anadyr',
    temperature: '-2°C',
    humidity: '100%',
    precipitation: '0%',
    nextFiveHrs: ['-1°C', '3°C', '-1°C', '-3°C'],
  },
  brokenhill: {
    cityName: 'BrokenHill',
    dateAndTime: '4/1/2020, 3:51:46 PM',
    timeZone: 'Australia/Broken_Hill',
    temperature: '10°C',
    humidity: '79%',
    precipitation: '20%',
    nextFiveHrs: ['17°C', '21°C', '22°C', '15°C'],
  },
  perth: {
    cityName: 'Perth',
    dateAndTime: '4/1/2020, 1:21:46 PM',
    timeZone: 'Australia/Perth',
    temperature: '18°C',
    humidity: '62%',
    precipitation: '36%',
    nextFiveHrs: ['6°C', '10°C', '11°C', '6°C'],
  },
  auckland: {
    cityName: 'Auckland',
    dateAndTime: '4/1/2020, 6:21:46 PM',
    timeZone: 'Pacific/Auckland',
    temperature: '17°C',
    humidity: '64%',
    precipitation: '34%',
    nextFiveHrs: ['17°C', '19°C', '18°C', '17°C'],
  },
  vostok: {
    cityName: 'Vostok',
    dateAndTime: '4/1/2020, 11:21:46 AM',
    timeZone: 'Antarctica/Vostok',
    temperature: '-61°C',
    humidity: '100%',
    precipitation: '0%',
    nextFiveHrs: ['-64°C', '-59°C', '-64°C', '-68°C'],
  },
  troll: {
    cityName: 'Troll',
    dateAndTime: '4/1/2020, 7:21:46 AM',
    timeZone: 'Antarctica/Troll',
    temperature: '-52°C',
    humidity: '100%',
    precipitation: '0%',
    nextFiveHrs: ['-70°C', '-70°C', '-66°C', '-71°C'],
  },
};

/*---------------------------------------------TOP SECTION-------------------------------------------------------*/

let city = document.getElementById('city-input');
let cityDrop = document.getElementById('city-dropdown');
let timeDisplay = document.getElementsByClassName('time-display');

for (const cityKey in data) {
  let cityObject = data[cityKey];
  let cityElement = document.createElement('option');
  cityElement.setAttribute('value', cityObject.cityName);
  cityDrop.appendChild(cityElement);
}

city.addEventListener('focus', () => {
  city.value = '';
});

city.addEventListener('change', () => {
  let key = city.value.toLowerCase();
  changeCityIcon(key);
  changeTempGrid(key);
  changeDateTime(key);
  changeTimeline(key);
  city.blur();
});

const changeCityIcon = (key) => {
  let cityIcon = document.getElementsByClassName('city-icon');
  cityIcon[0].setAttribute(
    'src',
    `./assets/htmlcss/Icons for cities/${key}.svg`
  );
};

const changeTempGrid = (key) => {
  let tempC = document.getElementsByClassName('tempC')[0];
  let tempF = document.getElementsByClassName('tempF')[0];
  let humidity = document.getElementsByClassName('humiValue')[0];
  let precipitation = document.getElementsByClassName('preciValue')[0];
  humidity.innerHTML = data[key].humidity;
  precipitation.innerHTML = data[key].precipitation;
  tempC.innerHTML = data[key].temperature;
  tempF.innerHTML = tempCtoF(key) + '°F';
};

const tempCtoF = (key) =>
  Math.floor((parseInt(data[key].temperature.split('°')[0]) * 9) / 5 + 32);

const changeDateTime = (key) => {
  let timeDisplay = document.getElementsByClassName('time-display')[0];
  let dateDisplay = document.getElementsByClassName('date-display')[0];
  [date, time, mState] = [...data[key].dateAndTime.split(' ')];
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
};

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

const changeTimeline = (key) => {
  [date, time, mState] = [...data[key].dateAndTime.split(' ')];
  [hours, minutes, seconds] = [...time.split(':')];
  let temperatures = data[key].nextFiveHrs;
  let timeline = document.getElementsByClassName('header-item-3')[0];
  let now = timeline.childNodes[1];
  now.childNodes[1].innerHTML = 'NOW';
  now.childNodes[5].setAttribute(
    'src',
    getWeatherIcon(parseInt(data[key].temperature.split('°')[0]))
  );
  now.childNodes[7].innerHTML = data[key].temperature;
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
};

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

const getWeatherIcon = (temp) =>
  `./assets/htmlcss/Weather Icons/${
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

buttonRight.onclick = function () {
  slide('right');
};
buttonLeft.onclick = function () {
  slide('left');
};

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

const getCardWeatherIcon = (temp) => {
  let temper = parseInt(temp.split('°')[0]);
  return `./assets/htmlcss/Weather%20Icons/${
    temper < 20 ? 'rainyIcon' : temper < 30 ? 'snowflakeIcon' : 'sunnyIcon'
  }.svg`;
};

const getCardTime = (datetime) => {
  [date, time, mState] = [...datetime.split(' ')];
  [hours, minutes, seconds] = [...time.split(':')];
  return `${hours}:${minutes} ${mState}`;
};

const getCardDate = (datetime) => {
  [date, time, mState] = [...datetime.split(' ')];
  [hours, minutes, seconds] = [...time.split(':')];
  return getDate(date);
};

let cardList = Object.keys(data);
let displayNumber = document.getElementById('display-number');
var length = displayNumber.value;
var weather;
let cardContainer = document.getElementsByClassName('card-container')[0];

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
      <h5>${getCardTime(cityDetails.dateAndTime)}</h5>
      <h5>${getCardDate(cityDetails.dateAndTime)}</h5>
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
        parseInt(data[a].temperature.split('°')[0]) -
        parseInt(data[b].temperature.split('°')[0])
      );
    } else if (param == 'snowflake') {
      return (
        parseInt(data[a].precipitation.split('%')[0]) -
        parseInt(data[b].precipitation.split('%')[0])
      );
    } else {
      return (
        parseInt(data[a].humidity.split('%')[0]) -
        parseInt(data[b].humidity.split('%')[0])
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