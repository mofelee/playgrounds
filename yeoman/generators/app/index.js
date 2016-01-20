var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  method1: function() {
    this.log("Hello yo");
  }
});
