angular.module('app').controller('trailDetailsCtrl', function($scope, $stateParams, trailService){
console.log("asdfsaf");
$scope.test = 'test';

var getData = function(){
  console.log("responsedsfdsf");
	trailService.getData().then(function(response){
    console.log(response);
		for (var i = 0; i < response.length; i++) {
      if(response[i].unique_id == $stateParams.id){
        console.log(response[i]);
        $scope.singleTrail = response[i];
      }
		}
	})

}


getData();

// $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 14 };






})
