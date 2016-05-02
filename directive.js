var app = angular.module('uniteUs');

app.directive('serviceTypeSelect', function(){
  return {
    replace: true,
    scope: {
      toBind: '='
    },
    controller: function($scope, Assistance) {
      $scope.serviceTypes = [];

      Assistance.getServiceTypes()
        .then(function(typeList) {
          $scope.serviceTypes = typeList;
        });
    },
    templateUrl: './serviceTypeSelect.html'
  }
})