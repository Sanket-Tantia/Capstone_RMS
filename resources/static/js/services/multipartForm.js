
app.service('multipartForm',['$http',function(){
	this.post = function(uploadUrl, data){
		var fd = new FormData();
		// for (var key in data)
		// 	fd.append(key,data[key]);
		fd.append('file',data);
		$http.post(uploadUrl,fd, {
			transformRequest: angular.identity,
			headers: {'Content-Type':undefined}
		})
		.success(function(){
			console.log("Uploaded");
		})
		.error(function(){
			console.log("Error");
		})
	}
}])