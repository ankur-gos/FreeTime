// InsertUser.js
// Ankur Goswami, 8 September 2015

var db = require('monk')('localhost/freetime');
var users = db.get('users');
var hashCreator = require('./HashCreator');

var mongoose = require('mongoose')
var User = mongoose.model('User')

exports.insertUser = function(email, callback){
	if (typeof email === 'string' || email instanceof String){
		var generatedHash = hashCreator.getHashKey(email);
		User.create({
			email: email,
			hash: generatedHash,
			verified: false
		}, function(err, user){
			callback(err, user);
		});
		// users.insert({
		// 	'email': email,
		// 	'hash': generatedHash,
		// 	'verified': false
		// }, function(err, doc){
		// 	callback(err, doc);
		// })
	}
	else{
		console.log('yo')
		callback(null, callback);
	}
}

// TODO
var checkUserExistsInDatabase = function(email){
	console.log('STUB');
}