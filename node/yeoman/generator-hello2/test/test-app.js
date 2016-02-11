'use strict';
/*globals describe, it, before */

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

describe('hello2:app', function() {
  before(function(done) {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      //.inDir(path.join(os.tmpdir(), './temp-test'))
      .inDir('./test-result')
      .withOptions({
        'skip-install': true
      })
      .withPrompts({
        someOption: true
      })
      .on('end', done);
  });

  it('create files', function() {
    assert.file([
      'bower.json',
      'package.json',
      '.editorconfig',
      '.jshintrc'
    ]);
  });
});
