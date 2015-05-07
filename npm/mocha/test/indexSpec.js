/* globals describe, it, require, sinon */

// var chai = require ('chai');
var expect = require('chai').expect;
var word = require('../index');
var sinon = require('sinon');

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

describe('Github info', function() {
  it('returns repo info from github', function(done) {
    word.info(function(reply) {
      expect(reply.language).to.equal('JavaScript');
      expect(reply.watchers).to.equal(0);
      console.log('RECEIVED');
      done();
    });
    //console.log('HELLO');
  });
});

describe('Github infoLang', function() {
  it.only('returns language information from github', function(done) {

    var ghRepo = {
      "language": "Assembly"
    };
    var stub = sinon.stub().callsArgWith(0, ghRepo);

    word.infoLang(stub, function(reply) {
      console.log(reply);
      expect(reply).to.be.equal('Language: Assembly');
      done();
    });
  });
});