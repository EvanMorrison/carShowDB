angular.module("MyCarApp")
.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: './home/home.html',
		controller: 'MainController'
	})
	.when('/compare', {
		templateUrl: './compare/compare.html',
		controller: 'CompareController'
	})
	.when('/favorites', {
		templateUrl: './favorites/favorites.html',
		controller: 'FavoritesController'
	})
	.when('/about', {
		templateUrl: './about/about.html',
		controller: 'AboutController'
	})

})
