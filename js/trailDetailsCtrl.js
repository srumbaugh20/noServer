angular.module('app').controller('trailDetailsCtrl', function($scope, $stateParams, trailService){

$scope.test = 'test';
$scope.maps;
$scope.singleTrail;

var getData = function(){
	trailService.getData().then(function(response){
		for (var i = 0; i < response.length; i++) {
      if(response[i].unique_id == $stateParams.id){
        $scope.singleTrail = response[i];
        console.log($scope.singleTrail);
      }
		}
	})

}

getData();

var trailLatitude;
var trailLongitude;

// $scope.coord = {latitude:$stateParams.lat, longitude:$stateParams.lon)};

$scope.maps = { center: { latitude: $stateParams.lat, longitude:$stateParams.lon }, zoom: 18 };


})
