describe('EventListing', () => {
  var eventOne = new EventListing('Hello, Bea!', '12/02/2019', '19:30')

  it('contains information about the event', () => {
    expect(eventOne.details()).toEqual('Hello, Bea!')
  })

  it('contains the date the event will take place', () => {
    expect(eventOne.date()).toEqual('12/02/2019')
  })

  it('contains the time the event will take place', () => {
    expect(eventOne.time()).toEqual('19:30')
  })
})
