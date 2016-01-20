/*! Hellogrunt - v0.1.0 - 2014-11-25
* https://github.com/styxgi/Sandboxes.NodeJS
* Copyright (c) 2014 styxgi; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.HelloGrunt = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.HelloGrunt = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.HelloGrunt.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.HelloGrunt.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].HelloGrunt = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
