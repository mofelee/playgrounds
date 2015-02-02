'use strict';
 
angular.module('helloProtractorApp')
  .controller('LoginCtrl', function ($scope) {
  	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.email = '';
    $scope.password = '';
    $scope.isLoggedIn = false;
 
    $scope.validate = function() {
      var email = $scope.email;
      var password = $scope.password;
      if(email === 'admin@app.com' && password ==='1234')
      {
        // spoof a validation success
        $scope.isLoggedIn = true;
      }
      else
      {
        $scope.isLoggedIn = false;
      }
    };
  });