const WEATHER_API_KEY = "b8d3e0118ba2816ceca4fd654db21c30";  // Your OpenWeatherMap API Key
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

async function getWeather() {
    const location = document.querySelector('.location').value;
    
    // Show the loading spinner
    document.getElementById('loading').style.display = 'block';
    document.getElementById('weather-info').style.display = 'none';  // Hide weather info initially

    const response = await fetch(`${WEATHER_API_URL}?q=${location}&appid=${WEATHER_API_KEY}&units=metric`);
    
    if (!response.ok) {
        alert("Error fetching data");
        return;
    }

    const data = await response.json();
    console.log(data);

    // Display the weather info
    const cityName = data.city.name;
    const temp = data.list[0].main.temp; // Current temperature
    const description = data.list[0].weather[0].description; // Weather description
    const icon = data.list[0].weather[0].icon; // Weather icon code
    
    // Set weather details
    document.getElementById('city-name').innerText = `City: ${cityName}`;
    document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
    document.getElementById('description').innerText = `Description: ${description}`;
    document.getElementById('weather-icon').innerHTML = `<img src="../assets/img/${icon}.png" alt="Weather Icon">`;

    // Hide the loading spinner and show the weather info
    document.getElementById('loading').style.display = 'none';
    document.getElementById('weather-info').style.display = 'block';
}

document.getElementById('search-city').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchWeather(); // Call the searchWeather function when Enter is pressed
    }
});

async function searchWeather() {
    const city = document.getElementById('search-city').value.trim();
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    // Show the loading spinner
    document.getElementById('loading').style.display = 'block';
    document.getElementById('weather-info').style.display = 'none';  // Hide weather info initially

    const response = await fetch(`${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    
    if (!response.ok) {
        alert("Error fetching data. Please check the city name.");
        return;
    }

    const data = await response.json();
    console.log(data);

    // Display the weather info
    const cityName = data.city.name;
    const temp = data.list[0].main.temp; // Current temperature
    const description = data.list[0].weather[0].description; // Weather description
    const icon = data.list[0].weather[0].icon; // Weather icon code
    
    // Set weather details
    document.getElementById('city-name').innerText = `City: ${cityName}`;
    document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
    document.getElementById('description').innerText = `Description: ${description}`;
    document.getElementById('weather-icon').innerHTML = `<img src="../assets/img/${icon}.png" alt="Weather Icon">`;

    // Hide the loading spinner and show the weather info
    document.getElementById('loading').style.display = 'none';
    document.getElementById('weather-info').style.display = 'block';
}