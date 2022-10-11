const today = new Date()

document.getElementById('date').innerText = "Today is " + today.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})

document.getElementById("footercopyright").innerText = (new Date()).getFullYear()
document.getElementById("lastupdated").innerText = document.lastModified

if ([1, 2].includes(today.getDay())) {
    document.getElementById('date').innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}
