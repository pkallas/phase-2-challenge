const expect = require('chai').expect;
const filterBetween = require('../functions/filterBetween');
let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow'];

describe('filterBetween', function() {
  it('Should be a function', function() {
    expect(filterBetween).to.be.a('function')
  })

  it("Should return ['dog'] when given (arr, 'deer', 'giraffe')", function() {
    expect(filterBetween((arr, 'deer', 'giraffe'))).to.deep.equal(['dog'])
  })

  it("Should return ['dog', 'lion', 'cow'] when given (arr, 'chimp', 'lobster')", function() {
    expect(filterBetween((arr, 'chimp', 'lobster'))).to.deep.equal(['dog', 'lion', 'cow'])
  })

  it("Should return [] when given (arr, 'chickadee', 'chimpanzee')", function() {
    expect(filterBetween((arr, 'chickadee', 'chimpanzee'))).to.deep.equal([])
  })
})
