const expect = require('chai').expect;
const reverseSentence = require('../functions/reverseSentence');

describe('reverseSentence', function() {
  it("Should be a function", function() {
    expect(reverseSentence).to.be.a('function')
  })

  it("Should return 'dog. the over jumped cat The' when given 'The cat jumped over the dog.'", function() {
    expect(reverseSentence('The cat jumped over the dog.')).to.deep.equal('dog. the over jumped cat The')
  })

  it("Should return 'world! Hello,' when given 'Hello, world!'", function() {
    expect(reverseSentence('Hello, world!')).to.deep.equal('world! Hello,')
  })
})
