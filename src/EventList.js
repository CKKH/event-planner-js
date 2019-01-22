function EventList (details, date, time) {
  this.details = details
  this.date = date
  this.time = time
}

var eventlist;

EventList.prototype.information = function() {
  return this.details
}

EventList.prototype.dateOfEvent = function() {
  return this.date
}
