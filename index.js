// http://api.weatherapi.com/v1/current.json?key=4b9e6a115458453693343324251207&q=mumbai&aqi=no
const temperatureField = document.querySelector(".temp")
const locationField = document.querySelector("#location")
const dateField = document.querySelector("#date")
const weatherField = document.querySelector(".condition p")
const searchField = document.querySelector(".search-area")
const form = document.querySelector("form")
let target = 'Mumbai'
form.addEventListener('submit', searchForLocation)
const fetchresults = async (targetLocation) => {


    let url = `https://api.weatherapi.com/v1/current.json?key=4b9e6a115458453693343324251207&q=${targetLocation}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    let locationname = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text
    updateDetails(temp, locationname, time, condition)
}
function updateDetails(temp, locationname, time, condition) {
    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]
    let day = getDayName(new Date(splitDate).getDay())
    temperatureField.innerText = temp
    locationField.innerText = locationname
    dateField.innerText = `${splitDate} ${day} ${splitTime}`
    weatherField.innerText = condition
}
function searchForLocation(e) {
    e.preventDefault()
    target = searchField.value
    fetchresults(target)
}
fetchresults(target)
function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Fridayday'
        case 6:
            return 'Saturday'
    }
}