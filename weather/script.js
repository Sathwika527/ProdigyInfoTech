function getWeather() {
    const apiKey = '225460e71381c414de19908d2ca0dd66'; // Replace with your API key from the weather service
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please check your input and try again.');
        });
}

function displayWeather(data) {
    const weatherResults = document.getElementById('weather-results');
    weatherResults.innerHTML = ''; // Clear previous results

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherInfo = `
        <h2>Weather in ${cityName}</h2>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Description:</strong> ${description}</p>
    `;

    weatherResults.innerHTML = weatherInfo;
}