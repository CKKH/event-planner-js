describe('EventList', () => {
  let eventList = new EventList()
  let eventListing = new EventListing('Hello, human', '13/02/2019', '20:00')

  it('instantiates with an empty array', () => {
    expect(eventList.entries.length).toEqual(0)
  })

  it('EventListings can be stored in EventList', () => {
    eventList.saveListing(eventListing)
    expect(eventList.entries.length).toEqual(1)
  })
})
