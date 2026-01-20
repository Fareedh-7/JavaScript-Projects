const cityInput = document.querySelector(".city-input");
const searchBtn = document.getElementById("search-btn");
const loading = document.getElementById("loading");
const weatherInfo = document.querySelector(".weather-info");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const url = `https://wttr.in/${city}?format=j1`;

  try {
    loading.style.display = "block";
    weatherInfo.style.display = "none";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    weatherData(data);
  } catch (error) {
    loading.textContent = "City not found or network error";
  } finally {
    loading.style.display = "none";
  }
}

function weatherData(data) {
  const current = data.current_condition[0];

  cityName.textContent = data.nearest_area[0].areaName[0].value;
  temperature.textContent = `Temperature: ${current.temp_C} °C`;
  weather.textContent = `Weather: ${current.weatherDesc[0].value}`;
  humidity.textContent = `Humidity: ${current.humidity}%`;
  wind.textContent = `Wind: ${current.windspeedKmph} km/h`;

  weatherInfo.style.display = "block";
}
