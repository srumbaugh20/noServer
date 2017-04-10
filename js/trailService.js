angular.module('app').service('trailService', function($http){
var self = this;

this.getData = function(){
	var url = 'https://trailapi-trailapi.p.mashape.com/';
	return $http ({
		method: 'GET',
		url:  'https://trailapi-trailapi.p.mashape.com/?limit=50&q[activities_activity_type_name_eq]=hiking&q[state_cont]=Washington&radius=25',
		headers:{
            'X-Mashape-Key': 'oSSORnciBcmsh4q4whBWUfJgzjx7p1mzuhMjsn5KNuB0IbTKYe'}
	}).then(function(response) {
		self.trails = response.data.places;
		return response.data.places.map(function(hike) {
			hike.latitude = hike.lat;
			hike.longitude = hike.lon;
			return hike;
		});;
		console.log(response);
	})

}





this.getData();


})
