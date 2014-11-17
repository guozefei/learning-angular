var app = angular.module('app', []);

app.controller('firstCtrl', function($scope){
 
 $scope.Profile = [
   {Message:"Hello", count:1, show:true},
   {Message:"yo", count:1, show:false}
   
 ];
  $scope.update = function(){
    
    $scope.Profile[0].count ++;
  };
  $scope.toggle = function(){
    
    $scope.Profile[1].show = !$scope.Profile[1].show;
  };
});