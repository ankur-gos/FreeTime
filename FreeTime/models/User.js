// User.js
// Ankur Goswami
// 8/24/2015

var encryptor = require('./PasswordEncryptor.js')

function FTUser(firstName, lastName, email, password){
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	encryptor.encryptPassword(password, function (err, hash){
		if (err)
			console.log(err)
		else
			this.password = hash
	})
}

