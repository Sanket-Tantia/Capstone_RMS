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


	  $scope.gridItems = [
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/QrXgXMhCSouyhU7idq7g_IMG_8402.jpg',
      headerText: 'Fireworks on the 4th',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatibus aliquam asperiores, cum distinctio aliquid recusandae velit beatae. Reprehenderit in eum, expedita, alias explicabo iure amet. Assumenda consequuntur vitae fugit.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/dandelion.jpg',
      headerText: 'Dandelion',
      blurbText: 'cliff Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae assumenda facilis qui minus, consequuntur reiciendis atque fugiat ullam id, placeat nam quas, voluptates ipsum velit voluptatum culpa numquam saepe quos!'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/C3EWdWzT8imxs0fKeKoC_blackforrest.jpg',
      headerText: 'Cabin in the Woods',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vero cum vitae laboriosam nemo quaerat, sapiente harum reiciendis voluptas itaque incidunt molestias, fugiat asperiores dolores officiis architecto nihil assumenda. Fugiat!'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplash_522b9cc0386f1_1.jpg',
      headerText: 'Lazy Sunday',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ex minima, fugiat itaque error voluptates inventore sunt sequi possimus tempore odit debitis sint. Repudiandae quia esse totam eum blanditiis sunt?'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/MIbCzcvxQdahamZSNQ26_12082014-IMG_3526.jpg',
      headerText: 'Yogi',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nisi magnam cum nam iusto fugiat suscipit tempora nostrum autem, quasi, nemo illo sunt vitae id consectetur. Culpa reprehenderit esse sapiente?'
    }
  ];

});