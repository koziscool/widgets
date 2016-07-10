
var widgets = angular.module('widgetsApp', []);

widgets.controller( 'RestaurantCtrl',
  ['$scope', function($scope){

    $scope.restaurants = [];

    $scope.processForm = function() {
        var newRestaurant = {};
        newRestaurant.name = $scope.formData.name;
        newRestaurant.foodType = $scope.formData.type;
        console.log( newRestaurant );
        $scope.restaurants.push( newRestaurant );
    }


  }]);

