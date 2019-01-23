function EventListing (details, date, time) {
  this._details = details
  this._date = date
  this._time = time
}

EventListing.prototype.details = function() {
  return this._details
}

EventListing.prototype.date = function() {
  return this._date
}

EventListing.prototype.time = function() {
  return this._time
}
