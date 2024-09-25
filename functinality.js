const apikey = "c771739469ac48188b0b67b70f9c300e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city_name) {
  try {
    const response = await fetch(`${apiUrl}${city_name}&appid=${apikey}`);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    // Update the DOM with weather data
    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Set the appropriate weather icon
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    } else {
      weatherIcon.src = "images/default.png"; // Set a default icon for other weather types
    }
  } catch (error) {
    alert("Error fetching weather data. Please try again later.");
    console.error(error);
  }
  document.querySelector(".weather").style.display = "block";
}

// Trigger checkWeather when the button is clicked
searchbtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Trigger checkWeather when the Enter key is pressed
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
searchBox.focus();