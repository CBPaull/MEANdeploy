var friends = require('./../controllers/friends.js');

module.exports = function(app){
	// app.post('/dummies/:test', function(req, res){
		
	// 	// I'm testing the info that I'm getting from my dummy Factory
	// 	// I console.log the body and the params just to make sure that it's
	// 	// going through 

	// 	console.log(req.body);
	// 	console.log(req.params.test)
	// 	// mongooseController.getMongooses(req, res);
	// })

	app.post('/friend', function(req, res){
		console.log('made it to my /friend route');
		friends.createFriend(req, res);

	})
	app.get('/friend', function(req, res){
		console.log(' made it to my /friend get route');
		friends.getFriends(req, res);
	})

	app.get('/friend/:id', function(req, res){
		console.log('made it to my /friend/:id get route');
		friends.getFriend(req, res);
	})

	app.post('/friend/:id/update', function(req, res){
		console.log('made it to my /friend/:id/update post route');
		friends.updateFriend(req, res);
	})
	app.post('/friend/:id/delete', function(req, res){
		console.log('made it to my /friend/:id/deletepost route');
		friends.deleteFriend(req, res);
	})
}