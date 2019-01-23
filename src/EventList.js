function EventList (details, date, time) {
  this._details = details
  this._date = date
  this._time = time
}

var eventlist;

EventList.prototype.details = function() {
  return this._details
}

EventList.prototype.date = function() {
  return this._date
}

EventList.prototype.time = function() {
  return this._time
}
