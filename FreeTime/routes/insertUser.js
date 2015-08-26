var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/test'

var insertUser = function(db, user, callback){
	db.collection('users').insertOne({
		

	})
}
