'use strict';

/* jasmine specs for controllers go here */
describe('DemoAngular controllers', function() {

  describe('geographyListCtrl', function(){

    var scope, ctrl, $httpBackend;

    beforeEach(module('demoAngular'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/states.json').respond([{name: 'State1'}, {name: 'State2'}]);
      $httpBackend.expectGET('data/lgas.json').respond([{name: 'Lga1'}, {name: 'Lga2'}]);

      scope = $rootScope.$new();
      ctrl = $controller('geographyListCtrl', {$scope: scope});
    }));


    it('should create "states" model with 2 states fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.states).toEqual([{name: 'State1'}, {name: 'State2'}]);
    });

    it('should create "states" model with 2 lgas fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.lgas).toEqual([{name: 'Lga1'}, {name: 'Lga2'}]);
    });

  });
});
