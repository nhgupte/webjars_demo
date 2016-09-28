'use strict';
// greet.js
angular.module('greetingApp').controller('GreetCtrl', function($scope, $http, $location) {
	$http.get('/greeting').success(function(data) {
		$scope.greeting = data;
	});
});