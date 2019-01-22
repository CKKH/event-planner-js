describe('EventList', () => {
  it('contains information about the event', () => {
    var eventOne = new EventList('Hello, Bea!','19:30, 12/02/2019' )
    expect(eventOne.information()).toEqual('Hello, Bea!')
  });

  it('contains the date the event will take place', function() {
    var eventOne = new EventList('Hello, Chris!','19:30, 12/02/2019')
    expect(eventOne.dateAndTimeOfEvent()).toEqual('19:30, 12/02/2019')
  });
})
