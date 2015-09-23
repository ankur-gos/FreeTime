var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/freetime');
var users = db.get('users');

var InsertUsers = require('../models/InsertUsers')
var URLCreator = require('../models/EmailURLCreator')
var EmailSender = require('../models/EmailSender')


//use request when user clicks link in email

router.get('/:key?', function (req, res, next) {
	if(req.params.key){
	    var session = req.session;
	    session.token = req.params.key;

		users.update({
			hash: req.params.key
		},{
			$set: {
				verified: true
			}
		});
		res.redirect('/')
	}
	else{
		next();
	}
});

// GET request for a hashkey given an email
// requirements: 
// body: email: string

// for test purposes only

// returns:
// string
router.get('/api/hashKey', function(req, res){
  if(req.headers.email != undefined){
    var name = req.headers.email;
    var key = hashCreator.getHashKey(name, function (key){
      console.log(key);
      res.send(key);
    });
  } else{
    res.send('error');
  }
})

// router.get('/:email', function(req, res, next){
// 	var insertUserHandler = function (err, doc){
// 		if(err){
// 			console.log('Error at: insertUserHandler-- insertUser')
// 		}
// 		else{
// 			URLCreator.createEmailURLFromDoc(doc, EmailSender.sendEmailURL)
// 		}
// 	}

// 	if (req.params.email){
// 		console.log('hello')
// 		Insert.insertUser(req.body.email, insertUserHandler)
// 		res.send("OKKKKK")
// 	}else{
// 		console.log('error')
// 		res.send('FAILED')
// 	}
// })

router.post('/', function (req, res, next){
	var insertUserHandler = function (err, doc){
		if(err){
			console.log(err)
			console.log('Error at: insertUserHandler-- insertUser')
		}
		else{
			URLCreator.createEmailURLFromDoc(doc, EmailSender.sendEmailURL)
		}
	}

	if (req.body.email){
		InsertUsers.insertUser(req.body.email, insertUserHandler);
		res.send("OKKKKK")
	}else{
		console.log('No email in body')
		res.send('FAILED')
	}
})

module.exports = router;