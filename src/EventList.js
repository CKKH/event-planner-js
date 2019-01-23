function EventList () {
  this._entries = []
  this._upcoming = []
}

EventList.prototype.saveListing = function (listing) {
  this._entries.push(listing)
}

// EventList.prototype.upcoming = function () {
//   let upcoming = []

//   this._entries.forEach((listing) => {
//   let currentDate = new Date().toLocaleDateString()
//   let listingDate = listing
//     if (listing.date() > currentDate) {
//       upcoming.push(listing)
//     }
//     // console.log(upcoming)
//     return this._upcoming = upcoming
//   })
// }
