describe('EventList', () => {
  it('contains information about the event', () => {
    var eventOne = new EventList('Hello, Bea!', '12/02/2019', '19:30')
    console.log(eventOne)
    expect(eventOne.details()).toEqual('Hello, Bea!')
  })

  it('contains the date the event will take place', () => {
    var eventOne = new EventList('Hello, Chris!', '12/02/2019', '19:30')
    expect(eventOne.date()).toEqual('12/02/2019')
  })

  it('contains the time the event will take place', () => {
    var eventOne = new EventList('Hello, Chris!', '12/02/2019', '19:30')
    expect(eventOne.time()).toEqual('19:30')
  })
})
