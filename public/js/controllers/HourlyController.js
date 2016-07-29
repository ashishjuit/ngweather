(function(){
  angular.module('ngWeather')
         .controller('HourlyController', HourlyController)

         HourlyController.$inject = ['$scope', 'WeatherService'];

          function HourlyController($scope, WeatherService){
           $scope.hourlyData = WeatherService.weather;
           $scope.formattedAddress = GeoLocationService.formattedAddress;
           console.log("$scope.hourlyData: ", $scope.hourlyData);
           console.log("$scope.hourlyData: ", $scope.minutelyData);
           console.log("$scope.hourlyData: ", $scope.dailyData);
           console.log('$scope.formattedAddress', $scope.formattedAddress);
           $scope.summaryLookup={
             'Drizzle' :'There will be light drizlle',
             'Partly Cloudy' : 'There will be clouds',
             'Light Rain' : 'It can rain lightly',
             'Clear' : 'Its pretty clear'
           };
           $scope.$watch(function(){
             return WeatherService.weather;
           }, function(value){
               $scope.hourlyData = value;
           }, true);


           $scope.$watch(function(){
             return GeoLocationService.formattedAddress;
           }, function(value){
             $scope.formattedAddress = value;
           })
         }
})();
