// FreeTime.js
// Ankur Goswami, 19 September 2015

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var SubFriend = require('./SubFriend');


var freeTimeSchema = new Schema({
	startTime: Date,
	endTime: Date,
	friends: [ SubFriend.schema ]
})

module.exports = mongoose.model('FreeTime', freeTimeSchema);