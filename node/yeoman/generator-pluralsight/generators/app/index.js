var generators = require('yeoman-generator');

var MyBase = generators.Base.extend({
  helper: function() {
    this.log('won\'t be called automatically');
  }
});

module.exports = MyBase.extend({
  constructor: function() {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('coffee'); // This method adds support for a `--coffee` flag
  },
  initializing: {
    method3: function() {
      this.helper();
    }
  },
  method1: function(){
    this.log('method1');
  }
});
