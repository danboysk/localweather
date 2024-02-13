// Get local weather, from OpenWeather.org
// 8/02/2024
// R. Williams

const API_KEY 	= "f09dd0fbaa1b0be2f89ef1b93b05b4ff";
const City 	= "Leeds, uk";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`;
const outputWeather = document.querySelector('#weather');
const outputTime = document.querySelector('#datetime');
const outputTemp = document.querySelector('#temp');
const outputIcon = document.querySelector('#iconurl');

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    outputWeather.textContent = data.weather[0].description;
    outputTemp.textContent = data.main.temp.toFixed(1)  + " *c";

    var weatherIconURL = "https://api.openweathermap.org/img/w/" + data.weather[0].icon;
    console.log("WeatherIconURL: ", weatherIconURL);

    const iconImg = document.createElement('img');
    iconImg.src = weatherIconURL;
    iconImg.alt = data.weather[0].description + " weather icon";
    outputIcon.appendChild(iconImg);

    let outputTime = Date(data.dt);
    console.log("unixTimestamp/data.dt: ", data.dt);  
    console.log("Data-Time: ", outputTime);

    outputTime.textContent = outputTime
    

  })
