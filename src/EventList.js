function EventList (details) {
  this.details = details
}

var eventlist;

EventList.prototype.information = function() {
  return this.details
}
