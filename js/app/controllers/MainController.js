function MainController($scope){
  $scope.name = "Adrian";
  $scope.email = "example@learn.co";
  $scope.phone = "(555)555-5555";
}

angular
  .module('app')
  .controller('MainController', MainController);
