describe('EventList', () => {
  it('instantiates with an empty array', () => {
    var eventList = new EventList()
    console.log(eventList)
    expect(eventList.entries.length).toEqual(0)
  })
})
