'use strict';

/* Controllers */

var demoAngularControllers = angular.module('demoAngularControllers', []);

demoAngularControllers.controller('geographyListCtrl', function($scope, $http, JsonSvc) {
    JsonSvc.load("states").then(function(data) {
        $scope.states  = data;
    });
    JsonSvc.load("lgas").then(function(data) {
        $scope.lgas  = data;
    });
});

demoAngularControllers.controller('stateMapCtrl', function($scope, $routeParams, JsonSvc) {
    $scope.element = {
        type: "state",
        code: $routeParams.code
    };
    JsonSvc.load("states").then(function(data) {
        angular.forEach(data, function(item) {
            if (item.code === $routeParams.code) {
                $scope.data = item;
                return;
            }
        });
    });
});

demoAngularControllers.controller('lgaMapCtrl', function($scope, $routeParams, JsonSvc) {
    $scope.element = {
        type: "lga",
        code: $routeParams.code
    };
    JsonSvc.load("lgas").then(function(data) {
        angular.forEach(data, function(item) {
            if (item.code === $routeParams.code) {
                $scope.data = item;
                return;
            }
        });
    });
});

demoAngularControllers.controller("headerCtrl", function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }

    $scope.isActivePath = function(route) {
        return ($location.path()).indexOf(route) >= 0;
    }
});