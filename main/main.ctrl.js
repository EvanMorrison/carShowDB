angular.module("MyCarApp")
    .controller("MainController", ["$scope", "$location", "HttpService", "DataService", function($scope, $location, HttpService, DataService) {
        $scope.title = "Welcome to the CarShow Project";
        $scope.makes = {};
        $scope.make = {};
        $scope.make.id = 00;

        $scope.getMakes = function() {
            HttpService.getMakes()
                .then(function(response) {
                    $scope.makes = response.makes;
                    DataService.makes = $scope.makes;
                    $scope.makes.unshift({
                        "id": 00,
                        "name": '-- select a manufacturer --'
                    });
                    $scope.make = $scope.makes[0];
                });
        }
        $scope.getMakes();

        $scope.showModels = function(make) {
            DataService.selectedMake = $scope.make;
            $location.path('models/' + make.id);
            console.log('selected make');
            console.log(make);
            console.log('selected make');
        }


    }]);