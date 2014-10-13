window.angular.module('lakes.controllers.lakesCTRL', [])
	.controller('LakesCTRL', ['$scope', '$http', 
		function($scope, $http){
			$scope.greeting = "It's working..";
			$scope.lakes = [];
			$http.get('http://localhost:3000/api/lakes')
				.then(function(result){
					$scope.lakes = result.data;
				})
			$scope.q = 30;
		}]);