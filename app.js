var MyCarApp = angular.module("MyCarApp", ['ngRoute']);

MyCarApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: './main/main.html',
			controller: 'MainController'
		})
		.when('/models', {
			templateUrl: './modelList/modelList.html',
			controller: 'MakeController'
		})
		.when('/models/:make', {
			templateUrl: './modelList/modelList.html',
			controller: 'MakeController'
		})
		.when('/model-info', {
			templateUrl: './modelView/model-info.html',
			controller: 'ModelController'
		})
		.when('/model-info/:model/:year', {
			templateUrl: './modelView/model-info.html',
			controller: 'ModelController'
		})
		.when('/about', {
			templateUrl: './about/about.html',
			controller: 'AboutController'
		})

});