var app = angular.module('uniteUs');

app.directive('serviceTypeSelect', function(){
  return {
    require: 'ngModel',
    replace: true,
    controller: function($scope, Assistance) {
      $scope.serviceTypes = [];

      Assistance.getServiceTypes()
        .then(function(typeList) {
          $scope.serviceTypes = typeList;
        });
    },
    link: function(scope, element, iAttr, ngModelCtrl) {
      scope.model = ngModelCtrl.$modelValue
    },
    templateUrl: './serviceTypeSelect.html'
  }
})