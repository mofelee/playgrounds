'use strict';

/**
 * @ngdoc function
 * @name ngYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngYoApp
 */
angular.module('ngYoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
