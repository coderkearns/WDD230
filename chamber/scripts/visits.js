const visitsOutput = document.getElementById("visits")

let oldDate = localStorage.getItem("lastVisit")
const currentDate = new Date()
localStorage.setItem("lastVisit", Number(currentDate))

if (!oldDate) {
    visitsOutput.textContent = "This is your first time visiting this page!"
} else {
    const visitDelta = currentDate.getTime() - oldDate
    const days = Math.round(visitDelta / (1000*60*60*24))
    visitsOutput.textContent = `It has been ${days} days since you last visited this page.`
}
