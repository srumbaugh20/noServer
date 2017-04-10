angular.module('app').controller('trailCtrl', function($scope, trailService, $stateParams, uiGmapGoogleMapApi){
$scope.test = 'test';

var getData = function(){
	trailService.getData().then(function(response){
		$scope.hikes = response
		console.log($scope.hikes);
	})

}

getData();

$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 14 };

// for (var i = 0; i < $scope['data'].length; i++){
// 	if ($scope.data[i].id == parseInt($stateParams.id)){
// 		$scope.item = $scope.data[i];
// 	}
// }

})
