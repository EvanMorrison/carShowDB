angular.module("MyCarApp")
	.controller("MakeController", ["$scope", "$routeParams", "DataService", function($scope, $routeParams, DataService) {
		$scope.make = DataService.selectedMake;
		$scope.models = DataService.selectedMake.models;
		$scope.title = "Model List";

	}])