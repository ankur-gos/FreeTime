var crypto = require('crypto');

exports.getHashKey = function(input, callback){
	var name = input;
	var hash = crypto.createHash('md5').update(name).digest('hex');
	callback(hash);
}