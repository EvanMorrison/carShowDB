angular.module("MyCarApp")
    .directive("brandHeader", function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: './directives/brandHeader.tplt.html',
            scope: {
                brandHeader: '='
            }
        }
    })