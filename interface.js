// window.addEventListener('load', () => {

  let eventList = new EventList();

  function postEvent() {
    let text = document.getElementById("text").value
    let dateString = document.getElementById("date").value
    let time = document.getElementById("time").value

    let newEvent = new Listing(text, dateString, time);

    let message = (`Event: ${newEvent.details()} || Date: ${newEvent.date()} || Time: ${newEvent.time()}`)

    let messageToPrint = document.createTextNode(message);

    let newItem = document.createElement('li')
      newItem.appendChild(messageToPrint)
      document.getElementById('EventList').appendChild(newItem)
  }
// })
