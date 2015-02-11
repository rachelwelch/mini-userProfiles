var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
    
    $scope.getData = function() {
      $scope.users = mainService.getUsers();  
    };
    
    $scope.getData();
    console.log($scope.users);
});