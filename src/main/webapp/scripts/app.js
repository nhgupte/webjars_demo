'use strict';

/**
 * @ngdoc overview
 * @name greetingApp
 * @description
 * # greetingApp
 *
 * Main module of the application.
 */
angular
  .module('greetingApp', [
    'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
