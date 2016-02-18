angular.module('moduleOne',[])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', '$http', '$sce', function($scope, $http, $sce){

		$http.get('/api/list')
			 .then(function(serverData){
			 	$scope.list = serverData.data
			 })

	}])