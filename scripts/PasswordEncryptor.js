// Password Encryptor
// Ankur Goswami
// 8/24/2015

var bcrypt = require('bcrypt')

export.encryptPassword = function(password, callback){
	bcrypt.genSalt(10, function(err, salt){
		if (err)
			return callback(err);

		bcrypt.hash(password, salt, function(err, hash) {
			return callback(err, hash);
		});
	});
};

export.comparePassword = function(password, userPassword, callback){
	bcrypt.compare(password, userPassword, function(err, isPasswordMatch){
		if (err)
			return callback(err);
		return callback(null, isPasswordMatch);
	});
};