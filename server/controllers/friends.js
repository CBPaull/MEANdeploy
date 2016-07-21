var mongoose = require('mongoose');
var friendDb = mongoose.model('Frienddb');

module.exports = (function() {
	return {
		getFriends: function(req, res){
			friendDb.find({}, function(err, friends){
				if(err){
					console.log(err);
					console.log('getfriends function friends controller');
				} else {
					res.json(friends);
				}
			})
		},
		createFriend: function(req, res){
			friend = new friendDb(req.body);
			friend.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new friend');
				} else {
					console.log('this is our new friend',result);
					res.json(result);

				}
			})
		},
		getFriend: function(req, res){
			// this should probably be findOne isntead of find
			friendDb.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh friend you are looking for", result);
				} else {
					console.log('this is our friend',result);
					res.json(result);
				}
			})
		},
		updateFriend: function(req, res){
			friendDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find friend', err);
				} else {
					result.firstname = req.body.firstname;
					result.lastname = req.body.lastname;
					result.birthday = req.body.birthday;
					result.save(function(err, result){
						if(err){
							console.log('couldnt save update friend', err);
						} else {
							console.log('found friend ', result);
							res.json(result);
						}
					})
				}
			})
		},
		deleteFriend: function(req, res){
			friendDb.remove({_id: req.params.id}, function(err) {
				if(err){
					console.log('coudlnt find friend', err);
				}
				else{
					friendDb.find({}, function(err, friends){
						if(err){
							console.log(err);
							console.log('getfriends function friends controller');
						} else {
							res.json(friends);
						}
					})
				}
			})
		}
	}
})();