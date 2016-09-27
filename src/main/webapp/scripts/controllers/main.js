'use strict';
// main.js
angular.module('greetingApp').controller('MainCtrl', function($scope, $http, $location) {
	$http.get('/greeting').success(function(data) {
		$scope.greeting = data;
	});
});