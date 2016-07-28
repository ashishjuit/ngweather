

(function(){
  angular.module('ngWeather')
         .controller('MinutelyController', MinutelyController)

         MinutelyController.$inject = ['$scope' , 'WeatherService'];

         function MinutelyController($scope, WeatherService){
           $scope.minutelyData = WeatherService.weather;
           $scope.summaryLookup={

           }
          $scope.$watch(function(){
            return WeatherService.weather;
          }, function(value){
            $scope.minutelyData = value;
          }, true);

         }


})();
