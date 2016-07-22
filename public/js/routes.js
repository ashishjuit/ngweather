
(function(){
  angular.module('ngWeather')
        .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'html/views/home.html',
        controller: 'HomeController'
      })
      .when('/hourly', {
        template: 'hourly'
      })
      .when('/minutely', {
        template: 'daily'
      })
      .when('/daily', {
        template: 'daily'
      })
      .otherwise({
        redirectTo: '/'
      });


      // $locationProvider.html5Mode(true);
  }

})();
