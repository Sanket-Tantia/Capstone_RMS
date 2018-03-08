
var app = angular.module('rmsApp',['ui.router','ui.bootstrap','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('login',{
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl'
  })
  .state('operations',{
    url: '/operations',
    templateUrl: '/views/operations.html',
    controller: 'OpCtrl'
  })

  .state('announcement',{
    url: '/announcement',
    templateUrl: '/views/announcement.html',
    controller: 'AnCtrl'
  })
  .state('uploadannouncement',{
    url: '/uploadannouncement',
    templateUrl: '/views/uploadannouncement.html',
    controller: 'uploadAnnouncementCtrl'
  })
  .state('newform',{
    url: '/newform',
    templateUrl: '/views/newform.html',
    controller: 'newformCtrl'
  })
  .state('manager',{
    url: '/manager',
    templateUrl: '/views/manager.html',
    //controller: 'managerCtrl'
  })
  .state('finance',{
    url: '/finance',
    templateUrl: '/views/finance.html',
    //controller: 'financeCtrl'
  })
  .state('humanresources',{
    url: '/humanresources',
    templateUrl: '/views/humanresources.html',
    //controller: 'humanresourcesCtrl'
  })
  .state('ITDepartment',{
    url: '/ITDepartment',
    templateUrl: '/views/ITDepartment.html',
    //controller: 'ITDepartmentCtrl'
  })
  .state('administartion',{
    url: '/administartion',
    templateUrl: '/views/administartion.html',
    //controller: 'administartionCtrl'
  })
  $urlRouterProvider.otherwise('/login');
});
