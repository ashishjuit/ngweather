(function(){
  angular.module('ngWeather')
         .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'WeatherService'];

  function SimpleController($scope, WeatherService){
    $scope.message = 'Hello There';
    WeatherService.getDailyData(29,-82);
  }
})();
