window.addEventListener('load', () => {

    let eventList = new EventList()

    let button = document.getElementById('create-listing-button')
    button.addEventListener('click', () => {
      let text = document.getElementById('text').value
      let dateString = document.getElementById('date').value
      let time = document.getElementById('time').value
      let listing = new Listing(text, dateString, time)
      eventList.saveListing(listing)
      display()
    })

    let weatherButton = document.getElementById('weather-button')
    weatherButton.addEventListener('click', () => {
      let city = document.getElementById('city').value
      let appID = config.API_ID
      let request = new XMLHttpRequest()
      request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}`, true)
      request.onload = () => {
        let forecast = JSON.parse(request.response)
        var weatherDiv = document.getElementById('weather')
        weatherDiv.innerText = `${forecast.weather[0].description}`
      }
      request.send()
    })

    const display = () => {
        let eventsDiv = document.getElementById('events')
        events = eventList.render()
        eventsDiv.innerHTML = ''
        eventsDiv.appendChild(events)
    }
})
