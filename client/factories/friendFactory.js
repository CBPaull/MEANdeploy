myApp.factory('friendFactory', function($http){



	var factory = {};

	var friendlist = [];

	factory.addFriend = function(data, callback){
		console.log('made it to my friend factory');
		$http.post('/friend', data).then(function(data){
			console.log('made it back from backend this is our new friend', data);
			friendlist.push(data.data);
			callback(friendlist);
		})
	}
	factory.getFriends = function(callback){
		console.log('made it to friend factory get friends');
		$http.get('/friend').then(function(friends){
			console.log('made it back from backend this all friends', friends);
			friendlist = friends.data;
			callback(friendlist);
		})
	}

	factory.getFriend = function(friendId, callback){
		$http.get('/friend/' + friendId).then(function(friend){
			console.log('made it back from backend this one friend', friend);
			callback(friend);
		})
	}
	factory.updateFriend = function(updatedFriend, callback){
		$http.post('/friend/' + updatedFriend._id + '/update', updatedFriend).then(function(data){
			console.log('made it back from backend this one friend', data.data);
			callback(data.data);
		})
	}
	factory.deleteFriend = function(id, callback){
		console.log(id)
		$http.post('/friend/' + id + '/delete').then(function(data){
			console.log('made it back from backend this one friend', data.data);
			callback(data.data);
		})
	}
	// This is my dummyFactory. I usually add this into any project that 
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well 
	// as how we would create a get request. 


	// var dummies = []

	// var factory = {}

	// factory.getDummies = function(callback){
	// 	$http.get('/dummies').then(function(data){
	// 		mongooses = data.data;
	// 		callback(data.data);
	// 	});
	// }

	// // the info parameter below is the the dummy that we're trying to add into our database

	// // I added a test for myself below. I'm passing both a body element as well a params element
	// // I use this as an initial test that I can pass information to my backend.
	// // Check out your server console and you should see the body and the value we pass through 
	// // the url. 
	// factory.addDummy = function(info, callback){
	// 	$http.post('/dummies/youShouldSeeThisInServerConsoleReqParams', info).then(function(data){
	// 		if(data.error){
	// 			callback(data);
	// 		} else {
	// 			mongooses.push(data)
	// 			callback(mongooses);
	// 		}
	// 	})
	// }

	return factory;
})