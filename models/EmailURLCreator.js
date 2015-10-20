// EmailURLCreator.js
// Ankur Goswami, 8 September 2015

var db = require('monk')('localhost/freetime');
var users = db.get('users');

exports.createEmailURL = function(email, callback){
	var baseURL = 'www.myfreetime.io/';
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

exports.createEmailURLFromDoc = function(doc, callback){
	var baseURL = 'localhost/';
	baseURL = baseURL + 'signup/' + doc.hash;
	callback(doc.email, baseURL);
}