/* globals describe, it, require */

// var chai = require ('chai');
var expect = require('chai').expect;
var word = require('../index');

describe('Sanitize', function() {

  // before(function() {
  // 	console.log('before');
  // })

  // beforeEach(function() {
  // 	console.log('before each');
  // })

  // after(function() {
  // 	console.log('after');
  // })

  // afterEach(function() {
  // 	console.log('after each');
  // })

  it('returns lowercase of a string', function() {
    var inputWord = 'hello world';
    var outputWord = word.sanitize(inputWord);
    // chai expect
    expect(outputWord).to.equal('hello world');
    expect(outputWord).to.not.equal('HELLO WORLD');
    expect(outputWord).to.be.a('string');
    expect(outputWord).to.not.be.a('number');
    expect(outputWord).to.contain('hello');
  });

  it('removes any hyphen', function() {
    var inputWord = 'hello~world';
    var outputWord = word.sanitize(inputWord);

    expect(outputWord).to.equal('hello world');
  });
});

describe('Github info', function(done) {
  it('returns repo info from github', function() {
    word.info(function(reply) {
      expect(reply.language).to.equal('JavaScript');
      expect(reply.watchers).to.equal(0);
      console.log('RECEIVED');
      done();
    });
    //console.log('HELLO');
  });
});