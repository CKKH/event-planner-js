function EventList () {
  this._entries = []
}

EventList.prototype.saveListing = function (listing) {
  this._entries.push(listing)
}

EventList.prototype.upcoming = function () {
  let events = this._entries
  let upcomingEvents = []
  let today = new Date()
  events.forEach(function(listing) {
    let listingDate = new Date(listing._date)
    if (listingDate > today) {
    console.log(listingDate)
      upcomingEvents.push(listing)
    }
  })
  return upcomingEvents
}

// EventList.prototype.render = function () {
//   let div = document.createElement('div');
//     this.upcoming().forEach((listing) => {
//     let listingHtml = listing.render();
//        div.appendChild(listingHtml);
//    })
//    return div
// }
