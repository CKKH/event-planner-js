function postEvent() {
  let text = document.getElementById("text").value
  let date = document.getElementById("date").value
  let time = document.getElementById("time").value

  let content = new EventList(text, date, time);
  console.log(content.information())

  let message = (`Event: ${content.information()} || Date : ${content.dateOfEvent()}`)

  let messageToPrint = document.createTextNode(message);

  let newItem = document.createElement('li')
    newItem.appendChild(messageToPrint)
    document.getElementById('EventList').appendChild(newItem)
}
