
(function(){
  angular.module('ngWeather')
        .config(RouteConfig);

  RouuteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
      $routeProvider
      .when('/', {
        template: 'home'
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
