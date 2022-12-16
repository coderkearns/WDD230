const freshForm = document.getElementById("fresh-form")
const fruitsArea = document.getElementById("fruits-area")

let fruits = []
prepareForm()

freshForm.addEventListener("submit", e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(freshForm).entries())

    /* Load fruit IDs from multiple checkboxes into an array */
    data.fruits = []
    for (let key in data) {
        if (key.startsWith("has-")) {
            if (data[key] === "on") {
                data.fruits.push(Number(key.replace("has-", "")))
                delete data[key]
            }
        }
    }

    renderRecipe(data)
})

const nameOutput = document.getElementById("name")
const ingredientsOutput = document.getElementById("ingredients")
const instructionsOutput = document.getElementById("instructions")
const dateOutput = document.getElementById("date")
const carbohydratesOutput = document.getElementById("carbohydrates")
const proteinOutput = document.getElementById("protein")
const fatOutput = document.getElementById("fat")
const sugarOutput = document.getElementById("sugar")
const caloriesOutput = document.getElementById("calories")

function renderRecipe(data) {
    nameOutput.textContent = `${data.firstName} ${data.lastName}${
        data.email ? " (" + data.email + ")" : ""
    }`
    data.fruits = data.fruits.map(fruitId => fruits.find(f => f.id === fruitId))
    data.fruits.forEach(fruit => {
        ingredientsOutput.innerHTML += `<li>${fruit.name}</li>`
    })
    instructionsOutput.textContent = data.specialInstructions
    dateOutput.textContent = new Date().toLocaleDateString()
    let nutrition = {
        carbohydrates: 0,
        protein: 0,
        fat: 0,
        sugar: 0,
        calories: 0,
    }
    for (let key in nutrition) {
        data.fruits.forEach(fruit => {
            nutrition[key] += fruit.nutritions[key]
        })
        nutrition[key] = parseInt(nutrition[key])
    }
    carbohydratesOutput.textContent = nutrition.carbohydrates
    proteinOutput.textContent = nutrition.protein
    fatOutput.textContent = nutrition.fat
    sugarOutput.textContent = nutrition.sugar
    caloriesOutput.textContent = nutrition.calories
}

async function prepareForm() {
    const url = "../data/fruit.json"
    const res = await fetch(url)
    fruits = await res.json()

    fruits.forEach(addOption)
}

function addOption(fruit) {
    fruitsArea.innerHTML += `<label><input type="checkbox" name="has-${fruit.id}"> ${fruit.name}</label>`
}
