/**
 * Application controllers
 *
 */
;(function() {
  'use strict';

  var app = angular.module( 'app' );

  app.controller( 'MainController',   MainController );
  app.controller( 'HomeController',   HomeController );
  app.controller( 'SingleController', SingleController );

  function HomeController( $scope, CONSTANTS, $http ) {
    $scope.data = {};
    // fetch the playlist items from the BBC API
    $http.get( CONSTANTS.API_URL, {
      params: {
        key: CONSTANTS.API_KEY,
        maxResults: '10'
      }
    })
    .success( function (data) {
      console.log(data);
      $scope.data = data.items;
    })
    .error( function (data) {
      console.log(data);
    });
  }

  HomeController.$inject = ['$scope', 'CONSTANTS', '$http'];

  function MainController( $scope ) {
  }
  MainController.$inject = ['$scope'];

  function SingleController( $scope ) {
  }
  SingleController.$inject = ['$scope'];

})();
