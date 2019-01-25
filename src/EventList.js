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
      upcomingEvents.push(listing)
    }
  })
  return upcomingEvents
}

EventList.prototype.sortUpcoming = function () {
  let sortedUpcomingEvents = this.upcoming()
  sortedUpcomingEvents.sort((listingOne, listingTwo) => {
    let listingOneDate = new Date(listingOne._date)
    let listingTwoDate = new Date(listingTwo._date)
    return listingOneDate - listingTwoDate
  })
  return sortedUpcomingEvents
}

EventList.prototype.render = function () {
 let div = document.createElement('div')
 this.sortUpcoming().forEach((listing) => {
     let eventHtml = listing.elementToDisplay()
     div.appendChild(eventHtml)
 })
 return div
}
