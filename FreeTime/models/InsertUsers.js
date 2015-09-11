// InsertUser.js
// Ankur Goswami, 8 September 2015

var db = require('monk')('localhost/freetime');
var users = db.get('users');
var hashCreator = require('./HashCreator');

exports.insertUser = function(email, callback){
	if (typeof email === 'string' || email instanceof String){
		console.log('hit');
		var generatedHash = hashCreator.getHashKey(email);
		console.log('hit2');
		users.insert({
			'email': email,
			'hash': generatedHash,
			'verified': false
		}, function(err, doc){
			callback(err, doc);
		})
	}
	else{
		console.log('yo')
		callback(null, callback);
	}
}