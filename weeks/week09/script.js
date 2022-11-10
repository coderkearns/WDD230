const cards = document.querySelector(".cards")

const PROPHETS_URL =
    "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json" // "./latter-day-prophets.json"

function getProphets() {
    return fetch(PROPHETS_URL).then(res => res.json())
}

function renderCard(prophet) {
    const card = document.createElement("section")
    card.classList.add("card")
    card.innerHTML = `
        <div class="card-image">
            <img src="${prophet.imageurl}" loading="lazy" alt="Portrait of ${prophet.name} ${prophet.lastname}"/>
        </div>
        <div class="card-body">
            <h2>${prophet.name} ${prophet.lastname}</h2>
            <ul>
                <li>Birthdate: ${prophet.birthdate}</li>
                <li>Death: ${prophet.death}</li>
                <li>Years as prophet: ${prophet.length} years</li>
                <li>Birthplace: ${prophet.birthplace}</li>
                <li>Number of children: ${prophet.numofchildren}</li>
            </ul>
        </div>
        `
    return card
}

function renderCards() {
    getProphets().then(json => {
        json.prophets.forEach(prophet => {
            cards.appendChild(renderCard(prophet))
        })
    })
}

renderCards()
