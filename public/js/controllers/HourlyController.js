(function(){
  angular.module('ngWeather')
          .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourlyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be some drizzle',
      'Partly Cloudy': 'There will be some clouds around in your area',
      'Light Rain' : 'It can rain lightly',
      'Clear' : 'Its pretty clear'

    };
    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;
    });


  }
})();
