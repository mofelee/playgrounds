'use strict';

/* Services */

var demoAngularServices = angular.module('demoAngularServices', []);

demoAngularServices.factory('JsonSvc', function($q, $http, $log) {

    var load = function(geoLevelName) {
        var deferred = $q.defer();

        var url = 'data/' + geoLevelName + '.json';
        $log.debug("loading json data: " + url);

        $http.get(url)
	        .success(function(data) {
	            deferred.resolve(data);
	            $log.debug("loading " + geoLevelName + " json data: SUCCESS");
	        })
	        .error(function(err) {
	            deferred.reject("Unable to read the " + geoLevelName + " data");
	            $log.debug("loading " + geoLevelName + " json data: FAILED (" + err + ")");
	        });

        return deferred.promise;
    };

    return {
        load: load
    };
});

// demoAngularServices.factory('QueryVts', ['$resource',
//   function($resource){
//   	return $resource('http://vts.eocng.org/Nav/SearchAreas?query=:search', {search:'@search'});

//     // return $resource('http://vts.eocng.org/Nav/SearchAreas?query=:search'), {}, {
//     //   query: {method:'GET', params:{search:':search'}, isArray:true }
//     // });
//   }]);