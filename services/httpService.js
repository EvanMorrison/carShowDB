angular.module("MyCarApp")
.service("HttpService", ["$http", function($http) {
	this.title = 'http service ready';

}]);