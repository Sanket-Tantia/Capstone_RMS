
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


	$scope.submit = function(){
		var uploadUrl = '';
		multipartForm.post(uploadUrl,$scope.imageFile);
	}
}]);