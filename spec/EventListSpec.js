describe('EventList', () => {
  let futureListingOne = {_details:'Future listing One', _date: '02/02/2022', _time: '02:02', elementToDisplay: function() {return document.createElement('div')}}
  let futureListingTwo = {_details: 'Future listing 2', _date: '03/03/2033', _time: '03:03', elementToDisplay: function() {return document.createElement('div')}}
  let futureListingThree = {_details: 'Future listing 3', _date: '04/04/2044', _time: '04:04'}
  let pastListing = {_details: 'Past listing', _date: '01/01/2011', _time: '01:10'}

  it('instantiates with an empty array', () => {
    let eventList = new EventList()
    expect(eventList._entries instanceof Array).toEqual(true)
  })

  it('Listings can be stored in EventList', () => {
    let eventList = new EventList()
    eventList.saveListing(futureListingOne)
    expect(eventList._entries[0]).toEqual(futureListingOne)
  })

  it('.upcoming returns an array of future listings', () => {
    let eventList = new EventList()
    eventList.saveListing(pastListing)
    eventList.saveListing(futureListingOne)
    let upcomingEvents = eventList.upcoming()
    expect(upcomingEvents[0]._date).toEqual('02/02/2022')
  })

  it('.sortUpcomingEvents returns events in chronological order', () => {
    let eventList = new EventList()
    eventList.saveListing(futureListingThree)
    eventList.saveListing(futureListingOne)
    eventList.saveListing(futureListingTwo)
    let sortedEvents = eventList.sortUpcoming()
    expect(sortedEvents[0]).toEqual(futureListingOne)
    expect(sortedEvents[1]).toEqual(futureListingTwo)
    expect(sortedEvents[2]).toEqual(futureListingThree)
  })

  it('.render adds 2 events to a div', () => {
    let eventList = new EventList
    eventList.saveListing(futureListingOne)
    eventList.saveListing(futureListingTwo)
    expect(eventList.render().childElementCount).toEqual(2)
  })
})
