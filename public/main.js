angular.module('moduleOne',[])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', '$http', '$sce', function($scope, $http, $sce){
		$scope.$sce = $sce
		
		$http.get('/api/list')
			 .then(function(serverData){
			 	$scope.list = serverData.data
			 })

		$scope.newVideo = function(){
			$http.post('/api/list', $scope.sub)
				 .then(function(serverData){
				 	$scope.list = serverData.data
				 	$scope.sub = {}
				 })				 
		}

		$scope.liked = function(vidName, $index){
			$http.post('/api/rate',{name: vidName})
				 .then(function(serverData){
				 	console.log(serverData)
				 	$scope.list.forEach(function(video){
				 		if(video.name == serverData.data.name){
				 			video.rating = serverData.data.num
				 			
				 		}
				 	})
				 	
				 })
		}
	}])