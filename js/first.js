
var app = angular.module('rmsApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
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
  .state('login',{
    url: '/login',
    templateUrl: 'login.html',
    controller: 'LoginCtrl'
  })
  $urlRouterProvider.otherwise('/login');
});