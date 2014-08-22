'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'MyCtrl1'});
	$routeProvider.when('/collections', {templateUrl: 'partials/collections.html', controller: 'MyCtrl2'});
	$routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'MyCtrl3'});
	$routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'MyCtrl4'});
	$routeProvider.otherwise({redirectTo: '/index.html'});
}]);
