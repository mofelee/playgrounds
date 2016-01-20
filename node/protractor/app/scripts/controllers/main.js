'use strict';

/**
 * @ngdoc function
 * @name helloProtractorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloProtractorApp
 */
angular.module('helloProtractorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
