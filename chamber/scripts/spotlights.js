const spotlights = document.querySelectorAll(".spotlights > div > section")

const DIRECTORY_URL = "./data/directory.json"

populate()

function getDirectory() {
    return fetch(DIRECTORY_URL)
        .then(res => res.json())
        .then(json => json.directory)
}

function populate() {
    getDirectory().then(directory => {
        let d = directory.filter(
            b => b.level === "silver" || b.level === "gold"
        )
        for (let spotlightEl of spotlights) {
            renderSpotlight(
                spotlightEl,
                d[Math.floor(Math.random() * d.length)]
            )
        }
    })
}

function renderSpotlight(spotlightEl, business) {
    const titleEl = spotlightEl.querySelector("h3")
    const imgEl = spotlightEl.querySelector("img")
    const descriptionEl = spotlightEl.querySelector("p > em")
    const contactEl = spotlightEl.querySelector("p.contact")

    titleEl.textContent = business.name
    imgEl.alt = business.name
    imgEl.src = business.img
    descriptionEl.textContent = business.description || "no description"
    contactEl.innerHTML = `${business.phone}<br/>email@example.com<br/><a href="${business.website}">Website</a>`
}
