// Ankur Goswami
// 28 September 2015

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.post('/', function(req, res){
	var session = req.session;
	if(session.token){
		User.findOne({ 'email': req.body.friendName }, function (err, friend){
			if(friend){
				User.update({ 'hash': session.token }, { $push : { 'friends' : friend._id }}, function(err, response){
					console.log(response);
				})
			}
			else{
				console.log('no friend, handle this');
			}
		})
	} else{
		console.log('no session token');
		res.send('no session token');
	}
})

router.get('/friends', function(req, res){
	var session = req.session;
	if(session.token){
		User.findOne({ 'hash' : session.token }, function (err, user){
			if(err){
				console.log(err);
				// I really need error handling
			}
			var friendIDs = user.friends;
			var friendNames = [];
			User.find({'_id' : { $in: friendIDs }}, function (err, friends){
				//console.log(friends);
				for(var i = 0; i < friends.length; i++){
					friendNames.push(friends[i].email)
				}
				console.log(friendNames)
				res.send({
					'names' : friendNames
				});
			})
			//console.log(friendNames);
		})
	}
	else{
		console.log('No session token');
		res.send('no session token');
	}
})

module.exports = router;