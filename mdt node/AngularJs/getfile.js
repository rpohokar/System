angular.module('myApp',[])
.controller('fileCtrl',function($scope,$http){
	$http.get('http://inorthwind.azurewebsites.net/Service1.svc/getAllCustomers').success(function(data){
			$scope.file=data;
	    })
	});