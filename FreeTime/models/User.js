// User.js
// Ankur Goswami
// 8/24/2015

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FreeTime = require('./FreeTime')

var userSchema = new Schema({
	email: String,
	hash: Number,
	verified: Boolean,
	freetimes: [FreeTime.schema]
})

module.exports = mongoose.model('User', userSchema)