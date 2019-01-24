describe('EventList', () => {
  let futureListing = new Listing('Future listing', '30/02/2019', '20:00')
  let futureListingTwo = new Listing('Future listing two', '31/03/2020', '08:00')

  it('instantiates with an empty array', () => {
    let eventList = new EventList()
    expect(eventList._entries instanceof Array).toEqual(true)
  })

  it('Listings can be stored in EventList', () => {
    let eventList = new EventList()
    eventList.saveListing(futureListing)
    expect(eventList._entries[0]).toEqual(futureListing)
  })

  // it('Event List can be displayed', () => {
  //   eventList = new EventList()
  //   eventList.saveListing(futureListing)
  //   eventList.saveListing(futureListingTwo)
  //   let eventDisplay = eventList.render()
  //   expect(eventDisplay).toEqual(futureListing, futureListingTwo) 
  // })

  it('Upcoming events can grouped', () => {
    let eventList = new EventList()
    let pastListing = new Listing('Past listing', '01/01/2010', '08:00')
    eventList.saveListing(pastListing)
    eventList.saveListing(futureListing)
    eventList.upcoming()
    expect(eventList._upcomingListings[0]).toEqual(futureListing)
  })
})
