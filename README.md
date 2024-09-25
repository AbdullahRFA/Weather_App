

# Weather App

This is a simple weather application that allows users to search for current weather conditions by entering a city name. The app fetches weather data using the OpenWeatherMap API and displays temperature, humidity, wind speed, and a corresponding weather icon.

## Demo

![App Screenshot](https://user-images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg)

## Features

- Search weather by city name
- Displays temperature, humidity, and wind speed
- Shows corresponding weather icons (cloudy, rainy, mist, drizzle, etc.)
- Responsive design with a beautiful background
- Dedicated section at the bottom of the card
- Supports fetching weather data by pressing Enter or clicking the search button

## Technologies Used

- **HTML**: Structuring the app
- **CSS**: Styling the user interface, including responsiveness and layout
- **JavaScript**: Handling API calls and updating the DOM with weather data
- **OpenWeatherMap API**: Provides real-time weather information

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Open `index.html` in your browser.

3. Enter a city name and press the "Search" button or hit Enter.

4. The weather information for the entered city will be displayed, including temperature, humidity, wind speed, and an appropriate weather icon.

## API Key

This project uses the OpenWeatherMap API. To make the app work, you'll need to replace the API key with your own.

1. Visit [OpenWeatherMap](https://openweathermap.org/) to get your API key.
2. Replace the following line in the JavaScript file with your API key:

   ```javascript
   const apikey = "your_api_key_here";
   ```

## File Structure

```plaintext
├── index.html         # Main HTML file for the app
├── style.css          # Styling for the weather app
├── functionality.js   # JavaScript to fetch and display weather data
├── images/            # Contains weather icons and search icon
└── README.md          # ReadMe for the repository
```

## Credits

- Background image: [Pexels](https://www.pexels.com/photo/pexels-photo-209831/)
- Weather data: [OpenWeatherMap](https://openweathermap.org/)



---

Feel free to customize this `README.md` as per your needs!
