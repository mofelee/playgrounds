'use strict';

/**
 * @ngdoc function
 * @name ngYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngYoApp
 */
angular.module('ngYoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
