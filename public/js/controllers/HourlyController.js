

(function(){
  angular.module('ngWeather')
         .controller('HourlyController', HourlyController)

         HourlyController.$inject = ['$scope', 'WeatherService'];

         function HourlyController($scope, WeatherService){
           $scope.hourlyData = WeatherService.weather;
           $scope.summaryLookup={
             'Drizzle' :'There will be light drizlle',
             'Partly Cloudy' : 'There will be cloud'
           };
           $scope.$watch(function(){
             return WeatherService.weather;
           }, function(value){
               $scope.hourlyData = value;
           }, true);

         }


})();
