const expect = require('chai').expect;
const month = require('../functions/month');

describe('month', function() {
  it('Should be a function', function() {
    expect(month).to.be.a('function')
  })

  it('Should return June when given new Date(2017, 5, 19)', function() {
    expect(month(new Date(2017, 5, 19))).to.deep.equal('June')
  })

  it('Should return December when given new Date(2017, 11, 25)', function() {
    expect(month(new Date(2017, 11, 25))).to.deep.equal('December')
  })
})
