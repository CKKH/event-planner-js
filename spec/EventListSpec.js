describe('EventList', () => {
  it('contains information about the event', () => {
    var eventOne = new EventList('Hello, Bea!')
    expect(eventOne.information()).toEqual('Hello, Bea!')
  })
})
