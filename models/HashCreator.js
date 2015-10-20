// Hash Creator
// Ankur Goswami, 8 September 2015

var crypto = require('crypto');

exports.getHashKey = function(input){
	var name = input;
	var hash = crypto.createHash('md5').update(name).digest('hex');
	return hash;
}