// EmailURLCreator.js
// Ankur Goswami, 8 September 2015

var db = require('monk')('localhost/freetime');
var users = db.get('users');

exports.createEmailURL = function(email, callback){
	var baseURL = 'http://52.25.145.199/';
	baseURL = baseURL + 'signup/';
	users.findOne({ email: email }).on('complete', function(err, doc){
		if (err)
			callback(err);
		else{
			baseURL = baseURL + doc.hash;
			callback(baseURL);
		}
	})
	
}