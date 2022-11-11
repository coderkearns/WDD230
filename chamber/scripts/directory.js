const cards = document.querySelector(".cards")
const list = document.querySelector(".list > table > tbody")

const DIRECTORY_URL = "./data/directory.json"

populate()

const mode = document.querySelector(".mode")
const goCards = document.querySelector("#go-cards")
const goList = document.querySelector("#go-list")

goCards.onclick = () => {
    mode.classList.remove("list-mode")
    mode.classList.add("cards-mode")
}

goList.onclick = () => {
    mode.classList.remove("cards-mode")
    mode.classList.add("list-mode")
}

function getDirectory() {
    return fetch(DIRECTORY_URL)
        .then(res => res.json())
        .then(json => json.directory)
}

function populate() {
    getDirectory().then(directory => {
        directory.forEach(member => {
            cards.appendChild(createCard(member))
            list.appendChild(createListItem(member))
        })
    })
}

function createCard(member) {
    const card = document.createElement("div")
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = member.img
    card.appendChild(img)

    const name = document.createElement("h3")
    name.textContent = member.name
    card.appendChild(name)

    const address = document.createElement("p")
    address.textContent = member.address
    card.appendChild(address)

    const phone = document.createElement("p")
    phone.textContent = member.phone
    card.appendChild(phone)

    const websiteContainer = document.createElement("p")
    const website = document.createElement("a")
    website.textContent = "Link"
    website.href = member.website
    website.target = "_blank"
    websiteContainer.appendChild(website)
    card.appendChild(websiteContainer)

    const level = document.createElement("p")
    level.classList.add("level", member.level)
    level.textContent = member.level
    card.appendChild(level)

    return card
}

function createListItem(member) {
    const listItem = document.createElement("tr")

    const name = document.createElement("td")
    name.textContent = member.name
    listItem.appendChild(name)

    const address = document.createElement("td")
    address.textContent = member.address
    listItem.appendChild(address)

    const phone = document.createElement("td")
    phone.textContent = member.phone
    listItem.appendChild(phone)

    const websiteContainer = document.createElement("td")
    const website = document.createElement("a")
    website.textContent = member.website
    website.href = member.website
    website.target = "_blank"
    websiteContainer.appendChild(website)
    listItem.appendChild(websiteContainer)

    const level = document.createElement("td")
    level.textContent = member.level.toUpperCase()
    listItem.appendChild(level)

    return listItem
}
