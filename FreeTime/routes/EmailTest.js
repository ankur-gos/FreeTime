// EmailTest.js
// Ankur Goswami, September 8, 2015

var express = require('express');
var router = express.Router();
var emailSender = require('../models/EmailSender')

router.get('/', function (req, res, next){
	console.log('foo1');
	emailSender.sendEmail();
	console.log('foo2');
});

module.exports = router;