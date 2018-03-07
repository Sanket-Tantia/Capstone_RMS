
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
  .state('manager',{
    url: '/manager',
    templateUrl: 'manager.html',
    //controller: 'managerCtrl'
  })
  .state('finance',{
    url: '/finance',
    templateUrl: 'finance.html',
    //controller: 'financeCtrl'
  })
  .state('humanresources',{
    url: '/humanresources',
    templateUrl: 'humanresources.html',
    //controller: 'humanresourcesCtrl'
  })
  .state('ITDepartment',{
    url: '/ITDepartment',
    templateUrl: 'ITDepartment.html',
    //controller: 'ITDepartmentCtrl'
  })
  .state('administartion',{
    url: '/administartion',
    templateUrl: 'administartion.html',
    //controller: 'administartionCtrl'
  })


  $urlRouterProvider.otherwise('/login');
});
