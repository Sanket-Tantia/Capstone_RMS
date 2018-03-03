app.controller('newformCtrl', function($scope, $state){

	var collapDict = {
		employee_collapsible: "block",
		flight_collapsible: "none",
		car_collapsible:"none",
		hotel_collapsible:"none"
	};

	$scope.collapsible = function(divName){
		console.log(collapDict[divName]);	
		if (collapDict[divName] == "block"){
			collapDict[divName] = "none";
		}
		else{
			collapDict[divName] = "block";	
		}
		document.getElementById(divName).style.display = collapDict[divName];
	}

});