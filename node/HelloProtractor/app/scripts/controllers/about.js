'use strict';

/**
 * @ngdoc function
 * @name helloProtractorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloProtractorApp
 */
angular.module('helloProtractorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
