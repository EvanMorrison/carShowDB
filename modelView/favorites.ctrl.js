angular.module("MyCarApp")
	.controller("ModelController", ["$scope", "$routeParams", "HttpService", "DataService", function($scope, $routeParams, HttpService, DataService) {
		$scope.title = 'Model Profile';
		$scope.makeId = DataService.selectedMake.id;
		$scope.make = DataService.selectedMake.name;
		$scope.model = $routeParams.model;
		$scope.year = $routeParams.year;



		$scope.getEditorial = function(make, model, year) {
			HttpService.getModelInfo(make, model, year)
				.then(function(response) {
					$scope.editorial = (response.editorial);
					console.log('controller review');
					console.log(response);
					console.log('controller review');
				})

		}

		var photoUrl = "http://media.ed.edmunds-media.com";

		$scope.getPhotos = function(make, model, year) {
			HttpService.getPhotos(make, model, year)
				.then(function(response) {
					$scope.photosObj = response;
					DataService.photos = $scope.photosObj;
					$scope.slides = photoUrl + $scope.photosObj.photos[0].sources[3].link.href;
					console.log($scope.slides);
				})
		}



		$scope.getEditorial($scope.make, $scope.model, $scope.year);
		$scope.getPhotos($scope.make, $scope.model, $scope.year);


		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;
		$scope.active = 0;
		var slides = $scope.slides;
		var currIndex = 0;

	}])

.filter('htmlToText', function() {

	return function(item) {
		console.log('filtering');
		console.log(item);
		return (item) ? item.replace(/<[^>]+>/g, '') : '';

	}
})