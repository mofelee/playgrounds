'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('DemoAngular App', function() {

  describe('Geography list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the state and lga lists as a user types into the search box', function() {

      var statesList = element.all(by.repeater('state in states'));
      var lgasList = element.all(by.repeater('lga in lgas'));
      var query = element(by.model('search'));

      expect(statesList.count()).toBe(3);
      expect(lgasList.count()).toBe(4);

      query.sendKeys('KN');
      expect(statesList.count()).toBe(1);
      expect(lgasList.count()).toBe(2);

      query.clear();
      query.sendKeys('Kan');
      expect(statesList.count()).toBe(1);
      expect(lgasList.count()).toBe(0);

      query.clear();
      query.sendKeys('WTF');
      expect(statesList.count()).toBe(0);
      expect(lgasList.count()).toBe(0);
    });

    it('should render specific states links', function() {
      var query = element(by.model('search'));
      query.sendKeys('kano');
      element(by.css('.states li a')).click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/map/state/KN');
      });
    });

    it('should render specific lgas links', function() {
      var query = element(by.model('search'));
      query.sendKeys('KN');
      element(by.css('.lgas li a')).click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/map/lga/20004');
      });
    });

  });
});
