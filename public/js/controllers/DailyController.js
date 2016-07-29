(function(){

  angular.module('ngWeather')
         .controller('DailyController', DailyController)

         DailyController.$inject = ['$scope', 'WeatherService', 'GeoLocationService'];

         function DailyController($scope, WeatherService, GeoLocationService){
           $scope.dailyData = WeatherService.weather;

           $scope.$watch(function(){
             return WeatherService.weather;
           }, function(value){
             $scope.dailyData = value;
           });
           $scope.$watch(function(){
             return GeoLocationService.formattedAddress;
           }, function(value){
             $scope.formattedAddress = value;

           });

         }
})();
