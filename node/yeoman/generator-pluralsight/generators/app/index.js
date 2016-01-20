'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function(){
        generators.Base.apply(this, arguments);
        this.log('constructor');
    },
    initializing: function(){
      this.log('initializing');
    },
    prompting: function(){
      this.log('prompting');
    },
    configuring: function(){
      this.log('configuring');
    },
    writing: function(){
      this.log('writing');
    },
    conflicts: function(){
      this.log('conflicts');
    },
    install: function(){
      this.log('install');
    },
    end: function(){
      this.log('end');
    }
});
