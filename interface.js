window.addEventListener('load', () => {

    let eventList = new EventList()
    window.el = eventList

    let button = document.getElementById('create-listing-button')
    button.addEventListener('click', () => {
        let text = document.getElementById('text').value
        let dateString = document.getElementById('date').value
        let time = document.getElementById('time').value
        let listing = new Listing(text, dateString, time)
        eventList.saveListing(listing)
        display()
    })

    const display = () => {
        let eventsDiv = document.getElementById('events')
        events = eventList.render()
        eventsDiv.innerHTML = ''
        eventsDiv.appendChild(events)
    }
})
