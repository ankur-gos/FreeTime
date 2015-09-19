var express = require('express');
var router = express.Router();



// POST New freetime
// requirements:
// body: start: UTF Time String, end: UTF Time String, date: string

// returns:
// freetime object id
router.post('/', function(req, res){
	var session = req.session
})

// GET Coinciding times

// returns:
// [timeID: [friends]]
router.get('', function(req, res, next){
	
})


module.exports = router;