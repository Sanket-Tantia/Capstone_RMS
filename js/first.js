

var app = angular.module('rmsApp', [ 'ngRoute', 'angular-hal' ]);


app.config(function($routeProvider) {


	$routeProvider.when('/', {
		templateUrl : '/js/app/app.html',
		controller : 'appController'
	})
	.when('/announcements', {
		templateUrl : '/js/announcements/announcements.html',
		controller : 'announcementController',
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
            }*/
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
                }*/
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
                            }*/
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
                }*/
        	})
        	.when('/login', {
        		templateUrl : '/js/login/login.html',
        		controller : 'loginController'
        	})
          .otherwise({
          		redirectTo : '/login'
          	});
  })

.controller('appController', ['$rootScope','$scope','halClient',
		function($rootScope, $scope, halClient) {
			$scope.root = function() {
				halClient.$get('/api', {
					linksAttribute : "_links"
				}).then(function(resource) {
					$rootScope.resource = resource;
				});
			};

			$scope.root();

		} ]);