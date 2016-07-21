myApp.controller('newController', function($scope, $location, friendFactory){

	$scope.createFriend = function(){
		console.log('createFriend newController', $scope.newFriend);
		friendFactory.addFriend($scope.newFriend, function(friendArray){
			$scope.friends = friendArray;
			$location.path('/');
		})
	}
})