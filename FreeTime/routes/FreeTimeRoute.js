var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var ISOFormatter = require('../scripts/ISOFormatter');




// POST New freetime
// requirements:
// body: start: UTF Time String, end: UTF Time String, date: string

// returns:
// freetime object id
router.post('/', function(req, res){
	var session = req.session;
	if(session.token){
		var date = req.body.date;
		console.log(date);
		var start = req.body.start;
		var end = req.body.end;
		console.log(start);
		console.log(end);
		User.findOne({ 'hash' : session.token }, function(err, user){
			var startISO = ISOFormatter.getISODateFromDateAndTime(date, start);
			var endISO = ISOFormatter.getISODateFromDateAndTime(date, end);
			var startDate = new Date(startISO);
			var endDate = new Date(endISO);
			user.freetimes.push({
				startTime: startDate,
				endTime: endDate
			})
			user.save(function(err){
				if (err){ 
					console.log(err);
					res.send(err);
				}
				else {
					console.log(user.freetimes[0]);
					res.send(user.freetimes[0]);
				}
			})
			// user.freetimes.push({
			// 	date: 
			// });
		})
		//res.send(':(')
	} else{
		console.log('no session token');
		res.send('no session token')
	}
})

// GET Coinciding times

// returns:
// [timeID: [friends]]
router.get('/times', function(req, res, next){
	var session = req.session;
	if(session.token){
		User.findOne({ 'hash' : session.token }, function(err, user){
			if (err){
				console.log(err);
				res.send(err)
			} else{
				//console.log(user);
				var startTimes = []
				//console.log(startTimes)
				var endTimes = []
				var freetimes = user.freetimes
				for (var i = 0; i < freetimes.length; i++){
					startTimes.push(freetimes[i].startTime);
					endTimes.push(freetimes[i].endTime);
				}


				var timesObject = {
					'times' : []
				}

				for(var i = 0; i < startTimes.length; i++){
					console.log(ISOFormatter.getTimeFromISODate(startTimes[i]));
					console.log(ISOFormatter.getDateFromISODate(startTimes[i]));
					timesObject.times.push({
						'start' : ISOFormatter.convertISOToDateString(startTimes[i]),
						'end' : ISOFormatter.convertISOToDateString(endTimes[i])
					});
				}
				res.send(timesObject)
			}
		})
	}
	else{
		console.log('no session token');
	}
});


module.exports = router;