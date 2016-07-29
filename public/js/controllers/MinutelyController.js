

(function(){
  angular.module('ngWeather')
         .controller('MinutelyController', MinutelyController)

         MinutelyController.$inject = ['$scope' , 'WeatherService', 'GeoLocationService'];

         function MinutelyController($scope, WeatherService, GeoLocationService){
           $scope.minutelyData = WeatherService.weather;
           $scope.summaryLookup={

           }
          $scope.$watch(function(){
            return WeatherService.weather;
          }, function(value){
            $scope.minutelyData = value;
          });
          $scope.$watch(function(){
            return GeoLocationService.formattedAddress;
          }, function(value){
            $scope.formattedAddress = value;

          });


         }


})();
