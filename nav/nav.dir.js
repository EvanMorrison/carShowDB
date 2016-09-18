angular.module("MyCarApp")
	.directive("navBar", function() {

		return {
			restrict: "AE",
			templateUrl: "./nav/navbar.html"
		}


		// $scope.navClass = function (page) {
		// 	console.log($location.path().substring(1));
		// 	var currentRoute = $location.path().substring(1) || 'home';
		// 	return page === currentRoute ? 'active' : '';
		// }
	});