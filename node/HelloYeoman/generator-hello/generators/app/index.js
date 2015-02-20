var generators = require('yeoman-generator');

var MyBase = generators.Base.extend({
  helper: function() {
    this.log('won\'t be called automatically');
  }
});

module.exports = MyBase.extend({
  // The name `constructor` is important here
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
  prompting: function() {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      store: true,
      default: this.appname // Default to current folder name
    }, function(answers) {
      this.log(answers.name);
      done();
    }.bind(this));
  },
  configuring: {
    method1: function() {
      this.log('method 1 just ran');
    },
    method2: function() {
      this.log('method 2 just ran');
    }
  },
  writing: {
    writeConfig: function() {
      this.config.save();
    }
  }
});