// Get local weather, from OpenWeather.org
// 8/02/2024
// R. Williams

const API_KEY 	= "f09dd0fbaa1b0be2f89ef1b93b05b4ff";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Leeds,uk&appid=${API_KEY}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.name);
   
    var weatherIconURL = "https://api.openweathermap.org/img/w/" + data.weather[0].icon;
      return `
        <br>
	<td>$(".icon").attr("src", weatherIconURL)</td>
	`;

  })

.catch(error => {
    console.error("Error fetching weather data:", error);
  });

