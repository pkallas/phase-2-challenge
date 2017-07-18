const expect = require('chai').expect;
const nameProps = require('../functions/nameProps');
let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
};

describe('nameProps', function() {
  it('Should be a function', function() {
    expect(nameProps).to.be.a('function')
  })

  it("Should return ['age', 'name', 'phone'] when given friend object", function() {
    expect(nameProps(friend)).to.deep.equal(['age', 'name', 'phone'])
  })

  it('Should return an empty array when given an empty object', function() {
    expect(nameProps({})).to.deep.equal([])
  })
})
