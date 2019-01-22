function EventList (details, dateTime) {
  this.details = details
  this.dateTime = dateTime
}

var eventlist;

EventList.prototype.information = function() {
  return this.details
}

EventList.prototype.dateAndTimeOfEvent = function() {
  return this.dateTime
}
