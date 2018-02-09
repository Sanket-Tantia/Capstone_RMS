var app = angular.module('rmsApp');

app.controller('AnCtrl', function($scope, $state){
//app.controller('OpController', function($routeProvider, $scope){
	console.log("hulu");
	$scope.newpage = function(state_name){
		console.log(state_name);
		$state.go(state_name);
	}
    
});