const input = document.getElementById("favchap")
const submitButton = document.querySelector("button[type='submit']")
const list = document.getElementsByClassName("list")[0]

submitButton.addEventListener("click", e => {
	e.preventDefault()
	const favChapter = input.value
	input.value = ""
	input.focus()
	createRow(favChapter)
})

function createRow(favChapter) {
	const li = document.createElement("li")
	li.appendChild(document.createTextNode(favChapter||"Alma 5"))
	const btn = document.createElement("button")
	btn.textContent = "❌"
	btn.addEventListener("click", e => {
		e.preventDefault()
		li.remove()
	})
	li.appendChild(btn)

	list.appendChild(li)
}
