
app.controller('uploadAnnouncementCtrl', ['$scope','multipartForm',function($scope, $state, multipartForm){

	$scope.checked = function(){
		if (document.getElementById("checked").checked == true){
			document.getElementById("showWhenChecked").style.display = "block";
			document.getElementById("upload").style.height = "550px";
		} else {
			document.getElementById("upload").style.height = "500px";
			document.getElementById("showWhenChecked").style.display = "none";
		}
	}

	$('#chooseFile').bind('change', function () {
		var filename = $("#chooseFile").val();
		if (/^\s*$/.test(filename)) {
			$(".file-upload").removeClass('active');
			$("#noFile").text("No file chosen..."); 
		}
		else {
			$(".file-upload").addClass('active');
			$("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
		}
	});



	// $rootScope.myValue = false;
	// $rootScope.title = "Upload Announcement";
	// $scope.Success_Msg = false;
	// $scope.uploadAnnouncements = function() {
	// 	var announcementObj = {
	// 		title : $scope.annTitle,
	// 		description :$scope.description,
	// 		start_date : $scope.startDate,
	// 		end_date: $scope.endDate,
	// 		send_email : $scope.emailOption,
	// 		alert_email : $scope.emailTo
	// 	};
	// 	console.log(announcementObj.isEmailChecked);
	// 	var result = $http.post('/announcements', announcementObj);
	// 	alert("Announcement uploaded successfully");
	// 	$("#annTitle").val("");
	// 	$("#description").val("");
	// 	$("#startDate").val("");
	// 	$("#endDate").val("");
	// 	$("#emailOption").val("");
	// 	$("#emailTo").val("");

	// 	result.success(function(data,status,headers,config){

	// 	});
	// 	res.error(function(data, status, headers, config) {
	// 		$("#annTitle").val("");
	// 		$("#description").val("");
	// 		$("#startDate").val("");
	// 		$("#endDate").val("");
	// 		$("#emailOption").val("");
	// 		$("#emailTo").val("");
	// 	});
	// }


	$scope.submit = function(){
		var uploadUrl = '';
		console.log($scope.imageFile);
		multipartForm.post(uploadUrl,$scope.imageFile);
	}
}]);