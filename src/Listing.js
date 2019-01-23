function Listing (details, date, time) {
  this._details = details
  this._date = date
  this._time = time
}

Listing.prototype.details = function() {
  return this._details
}

Listing.prototype.date = function() {
  return this._date
}

Listing.prototype.time = function() {
  return this._time
}
