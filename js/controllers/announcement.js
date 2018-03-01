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
	  $scope.myInterval = 1500;
	  $scope.slides = [
	    { image: "../img/5copy.jpg" },
	    { image: "../img/background.jpg" },
	    { image: "../img/5copy.jpg" },
	 ]


	  $scope.gridItems = [
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/QrXgXMhCSouyhU7idq7g_IMG_8402.jpg',
      headerText: 'Fireworks on the 4th',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur Reprehenderit in eum, expedita, alias explicabo iure amet consequuntur vitae fugit.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/dandelion.jpg',
      headerText: 'Dandelion',
      blurbText: 'cliff Lorem ipsum dolor sit amtur reiciendis atque fugiat nam  voluptatum culpa numquam saepe quos!'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/C3EWdWzT8imxs0fKeKoC_blackforrest.jpg',
      headerText: 'Cabin in the Woods',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing laborfficiis architecto nihil assumenda. Fugiat!'
    }
  ];

});