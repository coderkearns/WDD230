const temperatureOutput = document.getElementById('temp')
const windSpeedOutput = document.getElementById('wind-speed')
const windChillOutput = document.getElementById('wind-chill')
const weatherLogo = document.getElementById("weather-logo")
const typeName = document.getElementById("type-name")

const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?lat=30.508255&lon=-97.678894&appid=b5b5c25946a5dd44a4e61d008675c0e3&units=imperial"

function getWeather() {
    return fetch(API_URL).then(res => res.json())
}

function showWindChill(temperature, windSpeed) {
    temperatureOutput.textContent = temperature
    windSpeedOutput.textContent = windSpeed

    if (temperature <= 50 && windSpeed > 3) {
        if (!Number.isNaN(temperature) && !Number.isNaN(windSpeed)) {
            windChillOutput.textContent = Math.floor(
                calculateWindChill(temperature, windSpeed)
            )
        } else {
            windChillOutput.textContent = "NaN"
        }
    } else {
        windChillOutput.textContent = "N/A"
    }
}

function calculateWindChill(temperature, windSpeed) {
    return (
        35.74 +
        temperature * 0.6215 -
        Math.pow(windSpeed, 0.16) * 35.75 +
        temperature * Math.pow(windSpeed, 0.16) * 0.4275
    )
}

getWeather().then(weather => {
    showWindChill(weather.main.temp, weather.wind.speed)
    weatherLogo.src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    weatherLogo.alt = weather.weather[0].description
    typeName.textContent = weather.weather[0].main
})
