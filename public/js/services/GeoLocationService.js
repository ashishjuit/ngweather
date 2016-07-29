(function(){
  angular.module('ngWeather')
         .factory('GeoLocationService', GeoLocationService);

  GeoLocationService.$inject = ['$http'];

  function GeoLocationService($http){
    var baseUrlGoogleLocationToCoordinates = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

    var service = {
      getLocationData: getLocationData,
      service: {}
    };
    return service;

    function getLocationData(location){
      return $http.get(baseUrlGoogleLocationToCoordinates + location)
      .then(function(response){
        console.log('GeoLocation Response:', response)
        service.formattedAddress = response.data.results[0].formatted_address;
        return response.data.results[0].geometry.location;
      });
    }

  };

});
