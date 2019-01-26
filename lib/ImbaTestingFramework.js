const describe = (description, fn) => {
  console.log(description)
  fn()
}

const it = (message, fn) => {
  console.log('     ' + message)
  fn()
}

const expect = (expectation) => matchers(expectation)

const matchers = (expectation) => ({
  toEqual: (assertion) => {
    if (expectation === assertion) {
      console.log('%c Pass || Expected: ' + expectation + ' || Returned: ' + assertion, 'color:#808000')
      return true
    } else {
      console.log('%c Fail || Expected: ' + expectation + ' || Returned: ' + assertion, 'color:#8b0000')
      return false
    }
  },

  toThrowError: (assertion) => {
    let err
    try {
      expectation()
    }
    catch(error) {
      err = error.message
    }
    finally{
      if (err === assertion) {
        console.log('%c Pass || Expected: ' + err + ' || Returned: ' + assertion, 'color:#808000')
        return true
      } else {
        console.log('%c Fail || Expected: ' + err + ' || Reurned: ' + assertion, 'color:#8b0000')
        return false
      }
    }
  },

  toContain: (assertion) => {
    if (expectation.includes(assertion)) {
      console.log('%c Pass || Expected: ' + expectation + ' || Returned: ' + assertion, 'color:#808000')
      return true
    } else {
      console.log('%c Fail || Expected: ' + expectation + ' || Reurned: ' + assertion, 'color:#8b0000')
      return false
    }
  }
})
