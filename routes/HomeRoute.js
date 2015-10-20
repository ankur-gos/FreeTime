var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var sess = req.session;

	if(req.session.token){
		console.log('PING')
		res.redirect('/feed')
	}
	else{
		res.render('Home', {});
	}
});

// Input
router.get('/feed', function(req, res){
	res.render('Feed', {});
});

router.get('/logout', function(req, res){
  var session = req.session;
  session.destroy(function (err){
    console.log('logged out');
	res.send('success')
  })
});

module.exports = router;