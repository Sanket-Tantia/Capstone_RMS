
var app = angular.module('rmsApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('operations',{
    url: '/operations',
    templateUrl: 'operations.html',
    controller: 'OpController'
  })
  .state('announcement',{
    url: '/announcement',
    templateUrl: 'announcements.html',
    controller: 'AnCtrl'
  })
  $urlRouterProvider.otherwise('/operations');
});