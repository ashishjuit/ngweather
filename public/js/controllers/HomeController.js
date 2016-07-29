(function(){
  angular.module('ngWeather')
        .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'WeatherService', 'GeoLocationService'];

  function HomeController($scope, WeatherService, GeoLocationService){
    console.log(GeoLocationService)
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;

    function updateHourly(location){
      GeoLocationService.getLocationData(location)
                       .then(function(locationFromGoogle){
                         var lat = locationFromGoogle.lat;
                         var lon = locationFromGoogle.lng;
                         return WeatherService.getHourlyData(lat,lon);
                       });
    }

    function updateMinutely(location){
      GeoLocationService.getLocationData(location)
                       .then(function(locationFromGoogle){
                         var lat = locationFromGoogle.lat;
                         var lon = locationFromGoogle.lng;
                         return WeatherService.getMinutelyData(lat,lon);
                       });
    }

    function updateDaily(location){
      GeoLocationService.getLocationData(location)
                       .then(function(locationFromGoogle){
                         var lat = locationFromGoogle.lat;
                         var lon = locationFromGoogle.lng;
                         return WeatherService.getDailyData(lat,lon);
                       });
    }

  }
})();
