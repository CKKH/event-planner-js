describe('Listing', () => {
  var listing = new Listing('Hello, Bea!', '12/02/2019', '19:30')

  it('contains information about the event', () => {
    expect(listing._details).toEqual('Hello, Bea!')
  })

  it('contains the date the event will take place', () => {
    expect(listing._date).toEqual('12/02/2019')
  })

  it('contains the time the event will take place', () => {
    expect(listing._time).toEqual('19:30')
  })
})
