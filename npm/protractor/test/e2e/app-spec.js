'use strict';
 
/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */
 
describe('my app', function() {
 
  beforeEach(function () {
    browser.get('index.html');
  });
 
  it('should automatically redirect to / when location hash is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  }); 
 
  it('should consist of appname as heading', function() {
    element(by.css('.text-muted')).getText().then(function(name) {
	  expect(name).toBe('helloProtractor');
	});
  }); 
 
  it('should consist of 3 menu items', function() {
    var list = element.all(by.css('.nav li'));
	expect(list.count()).toBe(3);
  }); 
 
});