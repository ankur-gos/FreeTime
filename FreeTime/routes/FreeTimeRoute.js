var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = mongoose.model('User')





// POST New freetime
// requirements:
// body: start: UTF Time String, end: UTF Time String, date: string

// returns:
// freetime object id
router.post('/', function(req, res){
	var session = req.session
	if(session.token){
		var date = req.body.date
		console.log(date)
		var start = req.body.start
		var end = req.body.end
		console.log(start)
		console.log(end)
		User.findOne({ 'hash' : session.token }, function(err, user){
			console.log('woohoo!')
			res.send('Gotem boys')
			// user.freetimes.push({
			// 	date: 
			// });
		})
		res.send(':(')
	} else{
		console.log('no session token');
	}
})

// GET Coinciding times

// returns:
// [timeID: [friends]]
router.get('', function(req, res, next){
	
})

router.get('/:hash', function(req, res, next){

});


module.exports = router;