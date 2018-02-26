
var app = angular.module('rmsApp',['ui.router','ui.bootstrap','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('login',{
    url: '/login',
    templateUrl: 'login.html',
    controller: 'LoginCtrl'
  })
  .state('operations',{
    url: '/operations',
    templateUrl: 'operations.html',
    controller: 'OpCtrl'
  })
  
  .state('announcement',{
    url: '/announcement',
    templateUrl: 'announcement.html',
    controller: 'AnCtrl'
  })
  $urlRouterProvider.otherwise('/login');
});