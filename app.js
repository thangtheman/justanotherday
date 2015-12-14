var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("articles.json")
        .then(function (response) {$scope.names = response.data.results;});
});