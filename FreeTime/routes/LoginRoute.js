var express = require('express');
var router = express.Router();

var login = require('../models/LoginUser')

router.post('/', function (req, res, next){
  if(req.body.login){
    login.sendLoginEmail(req.body.login, function (){
      res.send('Done')
    })
  }
  else{
    res.send('No login name')
  }
})