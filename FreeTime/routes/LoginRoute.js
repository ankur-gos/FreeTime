var express = require('express');
var router = express.Router();

var InsertUsers = require('../models/InsertUsers')
var URLCreator = require('../models/EmailURLCreator')
var EmailSender = require('../models/EmailSender')

router.post('/', function (req, res, next){
  if(req.body.login){
    
  }
})