describe('EventList', () => {
  it('instantiates with an empty array', () => {
    var eventList = new EventList()
    console.log(eventList)
    expect(eventList.entries.length).toEqual(0)
  })

  // it('EvenListings can be stored in EventList', () => {
  //   var eventList = new EventList()
  //   var eventListing = new EventListing('Hello, human', '13/02/2019', '20:00')
  //   expect(eventList.entries.length).toEqual(0)
  // })
})
