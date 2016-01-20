'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('demoAngular'));

  // Test service availability
  it('check the existence of JsonSvc factory', inject(function(JsonSvc) {
      expect(JsonSvc).toBeDefined();
    }));
});