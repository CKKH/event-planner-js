function EventList () {
  this._entries = []
  this._upcomingListings = []
}

EventList.prototype.saveListing = function (listing) {
  this._entries.push(listing)
}

EventList.prototype.upcoming = function () {
  let upcoming = []

  this._entries.forEach((listing) => {
    let currentDate = new Date().toLocaleDateString()
    let listingDate = listing._date
      if (listingDate > currentDate) {
        console.log(listingDate)
        upcoming.push(listing)
      }
  })
  this._upcomingListings = upcoming
  console.log(this._upcomingListings)
  return
}
