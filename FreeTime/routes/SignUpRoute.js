var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/freetime');
var users = db.get('users');


// use request when user clicks link in email

router.use(':key?', function(req, res, next) {
	if(key){
		users.update({
			hash: key
		},{
			$set: {
				verified: true
			}
		});
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

module.exports = router;
