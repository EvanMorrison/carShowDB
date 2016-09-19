angular.module("MyCarApp")
	.service("HttpService", ["$http", function($http) {
		var self = this;
		var key = "kq43v6wf66jr43mskar4a3b3";
		var baseUrl = "https://api.edmunds.com/";


		this.getMakes = function() {
			return $http.get(baseUrl + 'api/vehicle/v2/makes/', {
					params: {
						view: "basic",
						fmt: "json",
						api_key: key
					}
				})
				.then(function(response) {
					return response.data;
				})
		}

		this.getModelInfo = function(selectedMake, selectedModel, selectedYear) {
			return $http.get(baseUrl + 'v1/content/editorreviews', {
					params: {
						make: selectedMake,
						model: selectedModel,
						year: selectedYear,
						api_key: key
					}
				})
				.then(function(response) {
					return response.data;
				})
		}

		this.getPhotos = function(selectedMake, selectedModel, selectedYear) {
			var queryUrl = baseUrl + "api/media/v2/" + selectedMake + "/" + selectedModel + '/' + selectedYear + '/photos';
			return $http.get(queryUrl, {
					params: {
						api_key: key,
					}
				})
				.then(function(response) {
					return response.data;
				})
		}
	}]);