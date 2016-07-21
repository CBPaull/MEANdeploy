myApp.controller('editController', function($scope, $routeParams, $location, friendFactory){

	var friendId = $routeParams.id;
	friendFactory.getFriend(friendId, function(data){
		console.log('show controller,', data);
		$scope.editFriend = data.data[0];
	});
	
	$scope.updateFriend = function(){
		friendFactory.updateFriend($scope.editFriend, function(data){
			$location.path('/');
		})
	}
})