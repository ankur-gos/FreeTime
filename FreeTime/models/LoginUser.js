// LoginUser.js
// Ankur Goswami 18 September 2015

var db = require('monk')('localhost/freetime');
var users = db.get('users');
var URLCreator = require('./EmailURLCreator');
var EmailSender = require('./EmailSender');

exports.sendLoginEmail = function (email, callback){
  if (typeof email === 'string' || email instanceof String){
    var user = users.findOne({ email: email })
    user.on('success', function(doc){
      URLCreator.createEmailURLFromDoc(doc, EmailSender.sendEmailURL);
      callback();
    });
    user.on('error', function(err){
      console.log('STUB LOGIN ERROR');
    });
  }
  else{
    console.log('email is not a string');
  }
}