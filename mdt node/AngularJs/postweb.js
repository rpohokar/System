angular.module('myApp', [])
.controller('myCtrl', function ($scope, $http) {
    $scope.hello = {name: "Rasika"};
    $scope.newName = "";
    $scope.sendPost = function() {
        var data = $.param({
            json: JSON.stringify({
                name: $scope.newName
            })
        });
        $http.post("/echo/json/", data).success(function(data, status) {
            $scope.hello = data;
        })
    }                   
})