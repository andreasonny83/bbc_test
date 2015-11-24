;(function() {

  angular
    .module( 'app', [
      'ngRoute'
    ])
    .config( config );

  config.$inject = ['$routeProvider'];

  /**
   * App routing
   */
  function config( $routeProvider ) {

    $routeProvider
      .when( '/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .when( '/app/:appID', {
        templateUrl: 'views/single.html',
        controller: 'SingleController',
        controllerAs: 'singleCtrl'
      })
      .when( '/feedback', {
        templateUrl: 'views/feedback.html',
        controller: 'FeedbackController',
        controllerAs: 'feedbackCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
