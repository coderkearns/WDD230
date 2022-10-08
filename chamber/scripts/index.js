document.getElementById('date').innerText = (new Date()).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})

document.getElementById("footercopyright").innerText = (new Date()).getFullYear()
document.getElementById("lastupdated").innerText = document.lastModified
