// var app = angular.module('rmsApp');
// var app = angular.module('rmsApp',['ui.router','ui.bootstrap']);

app.controller('AnCtrl', function($scope, $state){
//app.controller('OpController', function($routeProvider, $scope){
	console.log("hulu");
	// $scope.newpage = function(state_name){
	// 	console.log(state_name);
	// 	$state.go(state_name);
	// }
    	console.log("SSA");
	  $scope.myInterval = 1100;
	  $scope.slides = [
	    { image: "../img/5copy.jpg" },
	    { image: "../img/background.jpg" },
	    { image: "../img/5copy.jpg" },
	    { image: "../img/background.jpg" }
	 ]
});