var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup/:key', function(req, res, next) {
	
    res.render('index', {});
});

module.exports = router;
