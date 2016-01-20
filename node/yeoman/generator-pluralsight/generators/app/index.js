'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.log('constructor');
  },
  initializing: function() {
    this.log('initializing');
  },
  prompting: function() {
    this.log('prompting');
  },
  configuring: function() {
    this.log('configuring');
  },
  writing: {
    init: function() {
      this.log('writing');
      this.log('\tTemplate path: %s', this.templatePath());
      this.log('\tDestination path: %s', this.destinationPath());
    },
    gulpFile: function() {},
    packageJson: function() {},
    git: function() {},
    bower: function() {
      // Creating JSON file from object literal
      var bowerJson = {
        name: 'my-app',
        license: 'MIT',
        dependencies: {}
      };
      bowerJson.dependencies['angular'] = '~1.4.6';
      bowerJson.dependencies['lodash'] = '~3.0.1';
      this.fs.writeJSON('bower.json', bowerJson);
    },
    appStaticFiles: function() {
      this.log('\twriting app static files');
      // For log only
      var source = this.templatePath('_favicon.ico');
      var destination = this.destinationPath('_favicon.ico');
      this.log('\tsource: %s', source);
      this.log('\tdestination: %s', destination);
      // Copy file. No need to specify templatePath and destinationPath for copy function
      this.copy('_favicon.ico', 'src/favicon.ico');
      this.directory('styles', 'src/styles');
    },
    scripts: function() {},
    html: function() {
      // Copy templates and inject variables
      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('src/index.html'), {
          appname: 'My Cool App',
          ngapp: 'myapp'
        }
      );
    }
  },
  conflicts: function() {
    this.log('conflicts');
  },
  install: function() {
    this.log('install');
  },
  end: function() {
    console.log(yosay('this is the end'));
  }
});
