angular.module("MyCarApp", ['ngRoute'])
.controller("MainController", ["$scope", "HttpService", function($scope, HttpService) {
	$scope.title = 'main controller ready';
	$scope.serviceTitle = HttpService.title;
}])
