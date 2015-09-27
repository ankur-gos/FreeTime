// FreeTime.js
// Ankur Goswami, 19 September 2015

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var freeTimeSchema = new Schema({
	startTime: Date,
	endTime: Date,
})

module.exports = mongoose.model('FreeTime', freeTimeSchema);