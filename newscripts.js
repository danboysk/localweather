// 1. Use the correct function name:

const appKey 	= ''

fetch("https://api.openweathermap.org/data/2.5/weather?q=Leeds,uk&units=metric&APPID=")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);

    // var icon = "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weathericon = "https://api.openweathermap.org/img/w/" + data.weather[0].icon;

    console.log(weathericon);
  });
