angular.module("MyCarApp")
    .service("DataService", function() {
        var self = this;
        self.makes = {};
        self.modelList = [];

        self.selectedMake = {};

    })