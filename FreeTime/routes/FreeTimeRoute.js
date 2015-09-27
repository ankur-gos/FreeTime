var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = mongoose.model('User')
var ISOFormatter = require('../scripts/ISOFormatter')
//var XDate = require('../scripts/xdate')




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
					'starts' : createTimeArray(startTimes),
					'ends' : createTimeArray(endTimes)
				}
				res.send(timesObject)
			}
		})
	}
	else{
		console.log('no session token');
	}
});

//should use map()

var createTimeArray = function ( ISOTimes ) {
	var times = [];
	//console.log(ISOTimes.length)
	for (time in ISOTimes) {
		times.push(extractTimeFromISO(ISOTimes[time]))
	}
	//console.log(times.length)
	return times
}

var extractTimeFromISO = function( ISO ) {
	var date = new Date(ISO);
	return date.toTimeString();
}


module.exports = router;