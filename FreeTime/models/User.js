// User.js
// Ankur Goswami
// 8/24/2015

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var FreeTime = require('./FreeTime');

var userSchema = new Schema({
	email: String,
	hash: String,
	verified: Boolean,
	freetimes: [ FreeTime.schema ],
	friends: [ ObjectId ]
})

module.exports = mongoose.model('User', userSchema)