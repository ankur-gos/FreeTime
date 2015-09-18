var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var sess = req.session;

	if(req.session.token){
		res.redirect('/feed')
	}
	else{
		res.render('Partials/Home', {});
	}
});

// Input
router.get('/feed', function(req, res){
	res.render('Partials/Feed', {});
});

module.exports = router;