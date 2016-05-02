var app = angular.module('uniteUs');

app.service('Assistance', function($http, APIURL, $q) {

  function create(data) {
    var deferred = $q.defer();
    var request = {
      assistance_request: data
    }

    $http.post(APIURL + '/assistance-requests', data).$promise
      .then(function(response) {
        deferred.resolve(response.message);
      })
      .catch(function(error) {
        deferred.reject(error);
      });

    return deferred.promise;
  }

  function getServiceTypes() {
    var deferred = $q.defer();

    $http.get(APIURL + '/service-types')
      .then(function(response) {
        return deferred.resolve([
            {
                "display_name": "Benefits",
                "id": "benefits"
            },
            {
                "display_name": "Employment",
                "id": "employment"
            },
            {
                "display_name": "Healthcare",
                "id": "healthcare"
            },
            {
                "display_name": "Housing",
                "id": "housing"
            },
            {
                "display_name": "Legal",
                "id": "legal"
            }
        ]);
      },function(error) {
        return deferred.resolve([
            {
                "display_name": "Benefits",
                "id": "benefits"
            },
            {
                "display_name": "Employment",
                "id": "employment"
            },
            {
                "display_name": "Healthcare",
                "id": "healthcare"
            },
            {
                "display_name": "Housing",
                "id": "housing"
            },
            {
                "display_name": "Legal",
                "id": "legal"
            }
        ])
        return deferred.reject(error);
      });

    return deferred.promise;
  }

  return {
    create: create,
    getServiceTypes: getServiceTypes
  };


})