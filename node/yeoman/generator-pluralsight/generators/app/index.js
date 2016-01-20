'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);

    // Adding command line argument
    this.argument('appname', {type: String, required: true});
    this.appname = _.kebabCase(this.appname);
    this.log('appname (arg): %s', this.appname);
  },
  initializing: function() {
  },
  prompting: function() {
    this.log(yosay('Welcome to ' + chalk.green('(Yet Another Angular)') + ' Generator'));
  },
  configuring: function() {
  },
  writing: {
    init: function() {
      this.log('Template path: %s', this.templatePath());
      this.log('Destination path: %s', this.destinationPath());
    },
    gulpFile: function() {},
    packageJson: function() {},
    git: function() {},
    bower: function() {
      // Creating JSON file from object literal
      var bowerJson = {
        name: this.appname, 
        license: 'MIT',
        dependencies: {}
      };
      bowerJson.dependencies['angular'] = '~1.4.6';
      bowerJson.dependencies['lodash'] = '~3.0.1';
      this.fs.writeJSON('bower.json', bowerJson);
    },
    appStaticFiles: function() {
      // For log only
      var source = this.templatePath('_favicon.ico');
      var destination = this.destinationPath('_favicon.ico');
      this.log('source: %s', source);
      this.log('destination: %s', destination);
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
          appname: _.startCase(this.appname),
          ngapp: this.appname
        }
      );
    }
  },
  conflicts: function() {
  },
  install: function() {
  },
  end: function() {
  }
});
