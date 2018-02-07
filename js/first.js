

/*var app = angular.module('rmsApp', ['ngRoute']);


app.config(function($routeProvider) {

	$routeProvider.when('/announcements', {
		templateUrl : '/js/announcements/announcements.html',
		controller : 'announcementController',
		/*resolve: {
       	 usersResource: function($rootScope) {
       		if ($rootScope.resource)
        		 return $rootScope.resource.$get('users', {
        	            linksAttribute: "_links",
        	            embeddedAttribute: "_embedded"
        	        });
       		else
       			 return {};
       	 	}
        }
	})
	.when('/employeeSearch', {
    		templateUrl : '/js/employeeSearch/employeeSearch.html',
    		/*controller : 'announcementController',
    		resolve: {
           	 usersResource: function($rootScope) {
           		if ($rootScope.resource)
            		 return $rootScope.resource.$get('users', {
            	            linksAttribute: "_links",
            	            embeddedAttribute: "_embedded"
            	        });
           		else
           			 return {};
           	 	}
            }
    	})
    	.when('/sendEmailForm', {
        		templateUrl : '/js/sendEmailForm/sendEmailForm.html',
        		/*controller : 'announcementController',
        		resolve: {
               	 usersResource: function($rootScope) {
               		if ($rootScope.resource)
                		 return $rootScope.resource.$get('users', {
                	            linksAttribute: "_links",
                	            embeddedAttribute: "_embedded"
                	        });
               		else
               			 return {};
               	 	}
                }
      })
      .when('/uploadAnnouncements', {
                    		templateUrl : '/js/uploadAnnouncements/uploadAnnouncements.html',
                    		/*controller : 'announcementController',
                    		resolve: {
                           	 usersResource: function($rootScope) {
                           		if ($rootScope.resource)
                            		 return $rootScope.resource.$get('users', {
                            	            linksAttribute: "_links",
                            	            embeddedAttribute: "_embedded"
                            	        });
                           		else
                           			 return {};
                           	 	}
                            }
                    	})
.when('/operations', {
        		templateUrl : 'operations.html',
        		controller : 'OpController',
        		/*resolve: {
               	 usersResource: function($rootScope) {
               		if ($rootScope.resource)
                		 return $rootScope.resource.$get('users', {
                	            linksAttribute: "_links",
                	            embeddedAttribute: "_embedded"
                	        });
               		else
               			 return {};
               	 	}
                }
        	})
        	.when('/login', {
        		templateUrl : '/js/login/login.html',
        		controller : 'loginController'
        	})
          .otherwise({
          		redirectTo : '/operations'
          	});
  });*/

var app = angular.module('rmsApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('operations',{
    url: '/operations',
    templateUrl: 'operations.html',
    controller: 'OpController'
  })
  .state('signup',{
    url: '/signup',
    templateUrl: 'signup.html',
    controller: 'SignupCtrl'
  })
  $urlRouterProvider.otherwise('/operations');
});