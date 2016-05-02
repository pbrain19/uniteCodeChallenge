var app = angular.module('uniteUs');

app.controller('assistanceFormCTRL', function($scope, Assistance) {

  $scope.createRequest = function(assistanceDetails) {
    Assistance.create()
      .then(function(message) {
        $scope.alerts = [{type: 'success', msg: message}];
      })
      .catch(function(errorMessage) {
        $scope.alerts = [{type: 'danger', msg: errorMessage}];
      });
  }

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

});
