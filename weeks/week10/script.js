const currentTemp = document.querySelector("#current-temp")
const name = document.querySelector("#name")
const weatherIcon = document.querySelector("#weather-icon")
const captionDesc = document.querySelector("figcaption")

const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?lat=30.508255&lon=-97.678894&appid=b5b5c25946a5dd44a4e61d008675c0e3"

function getWeather() {
    return fetch(API_URL).then(res => res.json())
}

function displayWeather(weather) {
    console.log(weather)
    name.innerHTML = weather.name
    currentTemp.innerHTML = `<strong>${weather.main.temp.toFixed(0)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    const desc = weather.weather[0].description

    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", desc)
    captionDesc.textContent = desc
}

getWeather()
    .then(displayWeather)
    .catch(err => console.error(err))
