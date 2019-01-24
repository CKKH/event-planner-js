function Listing (details, date, time) {
  this._details = details
  this._date = date
  this._time = time
}

EventList.prototype.elementToDisplay = function () {
  let div = document.createElement('div')
  div.innerText = `Event: ${this._details} || Date: ${this.date} || Time: ${this.time}`
  return div
}
