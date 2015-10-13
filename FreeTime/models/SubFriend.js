// SubFriend.js
// Ankur Goswami
// 12 October 2015

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var subFriendSchema = new Schema({
	friend: ObjectId,
	start: String,
	end: String
})

module.exports = mongoose.model('SubFriend', subFriendSchema);