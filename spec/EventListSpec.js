describe('EventList', () => {
  let futureListing = new Listing('Future listing', '30/02/2019', '20:00')

  it('instantiates with an empty array', () => {
    let eventList = new EventList()
    expect(eventList._entries.length).toEqual(0)
  })

  it('Listings can be stored in EventList', () => {
    let eventList = new EventList()
    eventList.saveListing(futureListing)
    expect(eventList._entries[0]).toEqual(futureListing)
  })

  it('Upcoming events can be displayed', () => {
    let eventList = new EventList()
    let pastListing = new Listing('Past listing', '01/01/2010', '08:00')
    eventList.saveListing(pastListing)
    eventList.saveListing(futureListing)
    eventList.upcoming()
    expect(eventList._upcomingListings[0]).toEqual(futureListing)
  })
})
