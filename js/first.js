
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
  .state('uploadannouncement',{
    url: '/uploadannouncement',
    templateUrl: 'uploadannouncement.html',
    controller: 'uploadAnnouncementCtrl'
  })
  .state('newform',{
    url: '/newform',
    templateUrl: 'newform.html',
    controller: 'newformCtrl'
  })
  $urlRouterProvider.otherwise('/login');
});