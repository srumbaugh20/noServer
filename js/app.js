angular.module('app',['ui.router', 'uiGmapgoogle-maps'])
.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){

$stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html'

  })

  .state('about', {
    url: '/about',
    templateUrl: './views/about.html'
    // controller: 'controller'
  })


  .state('trails', {
    url: '/trails',
    templateUrl: './views/trails.html',
    controller: 'trailCtrl'
  })

  .state('traildetails', {
    url: '/traildetails/:id',
    templateUrl: './views/trail-details.html',
    controller: 'trailDetailsCtrl'
  })



$urlRouterProvider.otherwise('/');



uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCuMlA8PvcPXdv2lOD_ZzHcX0gA3Q0Fjvc',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });

})
console.log('message');
