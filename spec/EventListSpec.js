describe('EventList', () => {
  let futureListing = {_details:'Future listing', _date: '02/02/2022', _time: '02:02'}
  // let futureListingTwo = {details: 'Future listing Two', date: '03/03/2019', time: '03:03')}
  let pastListing = {_details: 'Past listing', _date: '01/01/2011', _time: '01:10'}

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
  //   let eventList = new EventList()
  //   eventList.saveListing(futureListing)
  //   eventList.saveListing(futureListingTwo)
  //   let eventDisplay = eventList.render()
  //   expect(eventDisplay).toEqual(eventList) 
  // })

  it('.upcoming returns an array of future listings', () => {
    let eventList = new EventList()
    eventList.saveListing(pastListing)
    eventList.saveListing(futureListing)
    let upcomingEvents = eventList.upcoming()
    expect(upcomingEvents[0]._date).toEqual('02/02/2022')
  })
})
