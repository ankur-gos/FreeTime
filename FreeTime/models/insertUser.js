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
		callback(null, callback);
	}
}