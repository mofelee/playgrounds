'use strict';

var demoAngular = angular.module('demoAngular', [
  'ngRoute',
  'demoAngularControllers',
  'demoAngularServices'
]);

demoAngular.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/geography-list.html',
        controller: 'geographyListCtrl'
      }).
      when('/map/state/:code', {
        templateUrl: 'partials/map.html',
        controller: 'stateMapCtrl'
      }).
      when('/map/lga/:code', {
        templateUrl: 'partials/map.html',
        controller: 'lgaMapCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
