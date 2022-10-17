const temperatureOutput = document.getElementById('temp')
const windSpeedOutput = document.getElementById('wind-speed')
const windChillOutput = document.getElementById('wind-chill')

const temperature = Number(prompt("What is the temperature in degrees Fahrenheit?"))
const windSpeed = Number(prompt("What is the wind speed in miles per hour?"))

temperatureOutput.textContent = temperature
windSpeedOutput.textContent = windSpeed

if (temperature <= 50 && windSpeed > 3) {
    if (!Number.isNaN(temperature) && !Number.isNaN(windSpeed)) {
        windChillOutput.textContent = Math.floor(calculateWindChill())
    } else {
        windChillOutput.textContent = "NaN"
    }
} else {
    windChillOutput.textContent = "N/A"
}

function calculateWindChill() {
    return 35.74 + (temperature * 0.6215) - (Math.pow(windSpeed, 0.16) * 35.75) + (temperature * Math.pow(windSpeed, 0.16) * 0.4275)
}
