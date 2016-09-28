'use strict';
// main.js
angular.module('greetingApp').controller('MainCtrl', function($scope, $http, $routeParams) {
	if (!angular.isUndefined($routeParams.name)){
		$http.get('/greeting?name=' + $routeParams.name).success(function(data) {
			$scope.greeting = data;
		});
	} else {
	$http.get('/greeting').success(function(data) {
		$scope.greeting = data;
	});
	}
});