function EventList () {
  this._entries = []
}

EventList.prototype.entries = function () {
  this._entries
}

EventList.prototype.saveListing = function (listing) {
  this._entries.push(listing)
}
//   this._details = details
//   this._date = date
//   this._time = time
// }

// var eventlist;

// EventListing.prototype.details = function() {
//   return this._details
// }

// EventListing.prototype.date = function() {
//   return this._date
// }

// EventListing.prototype.time = function() {
//   return this._time
// }
