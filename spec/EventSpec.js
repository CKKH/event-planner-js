describe('Event', () => {
  it('contains information about the event', () => {
    var eventOne = new Event('Hello, Bea!')
    expect(eventOne.information()).toEqual('Hello, Bea!')
  })
})
