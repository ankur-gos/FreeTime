// FreeTime.js
// Ankur Goswami, 19 September 2015

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var freeTimeSchema = new Schema({
	startTime: Date,
	endTime: Date,
	friends: [ ObjectId ]
})

module.exports = mongoose.model('FreeTime', freeTimeSchema);