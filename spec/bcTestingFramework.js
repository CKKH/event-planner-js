'use strict'

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const expect = (actual) => ({
  toEqual: (expected) => {
    if (actual === expected) {
      console.log('%c pass', 'color:#008000')
      return true
    } else {
      console.log('%c fail', 'color:#ff0000')
      return false
    }
  }
})

function ExpectEquality(actual, expected) {
  if (actual === expected) {
    console.log('%c pass', 'color:#008000')
    return true;
  } else {
    console.log('%c fail', 'color:#ff0000')
    return false;
  }
}
