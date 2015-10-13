// Ankur Goswami
// 12 October 2015
// FreeTimeMapper.js

var ISOFormatter = require('./ISOFormatter');
var mongoose = require('mogngoose');
var Schema = mongoose.Schema;
var User = mongoose.model('User');

exports.checkUserFreetimes = function (user1Times, user2Times){
	for (var i = 0; i < user1Times.length; i++){
		var u1Date = ISOFormatter.getDateFromISODate(user1Times[i].startTime.toISOString());
		var u1StartTime = ISOFormatter.getTimeFromISODate(user1Times[i].startTime.toISOString());
		var u1EndTime = ISOFormatter.getTimeFromISODate(user1Times[i].endTime.toISOString());
		for (var j = 0; j < user2Times.length; j++){
			var u2Date = ISOFormatter.getDateFromISODate(userTimes[j].startTime.toISOString());
			if(u1Date != u2Date){
				console.log("Date not matched");
				break;
			}

			var u2StartTime = ISOFormatter.getTimeFromISODate(user2Times[j].startTime.toISOString());
			var u2EndTime = ISOFormatter.getTimeFromISODate(user2Times[j].endTime.toISOString());

			
		}
	}
}

// TODO: Refactor into subfunctions.
var checkTimes = function (u1StartTime, u1EndTime, u2StartTime, u2EndTime){
	var u1StartSplit = u1StartTime.split(':');
	var u1StartHour = parseInt(u1StartSplit[0]);
	var u1StartMinute = parseInt(u1StartSplit[1]);

	var u2StartSplit = u1StartTime.split(':');
	u2StartHour = parseInt(u2StartSplit[0]);
	u2StartMinute = parseInt(u2StartSplit[1]);

	var u1EndSplit = u1EndTime.split(':');
	var u1EndHour = parseInt(u1EndSplit[0]);
	var u1EndMinute = parseInt(u1EndSplit[1]);

	var u2EndSplit = u2EndTime.split(':');
	var u2EndHour = parseInt(u2EndSplit[0]);
	var u2EndMinute = parseInt(u2EndSplit[1]);

	if(u2EndHour < u1StartHour){
		return undefined;
	}
	if(u2StartHour > u1EndHour){
		return undefined;
	}
	if(u2StartHour > u1StartHour && u2EndHour < u1EndHour){
		return {
			start: u2StartTime,
			end: u2EndTime
		}
	}
	if(u2StartHour > u1StartHour && u2EndHour == u1EndHour){
		var paddedMinute = checkAndPadEndMinutes(u1EndMinute, u2EndMinute);
		var paddedHour = pad(u1EndHour, 2);

		var endTime = paddedHour + ":" + paddedMinute + ":00.000Z";

		return {
			start: u2StartTime,
			end: endTime
		}
	}
	if(u2StartHour > u1StartHour && u2EndHour > u1EndHour){
		return {
			start: u2StartTime,
			end: u1EndTime
		}
	}
	if(u2StartHour == u1StartHour && u2EndHour < u1EndHour){
		return {
			start: constructStartTime(u1StartMinute, u2StartMinute, u1StartHour),
			end: u2EndTime
		}
	}
	if(u2StartHour == u1StartHour && u2EndHour == u1EndHour){
		return {
			start: constructStartTime(u1StartMinute, u2StartMinute, u1StartHour),
			end: constructEndTime(u1EndMinute, u2EndMinute, u1EndHour)
		}
	}
	if(u2StartHour == u1StartHour && u2EndHour > u1EndHour){
		return{
			start: constructStartTime(u1StartMinute, u2StartMinute, u1StartHour),
			end: u1EndTime
		}
	}
	if(u2StartHour < u1StartHour && u2EndHour > u1EndHour){
		return{
			start: u1StartTime,
			end: u1EndHour
		}
	}
	if(u2StartHour < u1StartHour && u2EndHour == u1EndHour){
		return{
			start: u1StartTime,
			end: constructEndTime(u1EndMinute, u2EndMinute, u1EndHour)
		}
	}
	if(u2StartHour < u1StartHour && u2EndHour < u1EndHour){
		return{
			start: u1StartTime,
			end: u2EndTime
		}
	}
}

function constructEndTime(u1EndMinute, u2EndMinute, endHour){
	var paddedMinute = checkAndPadEndMinutes(u1EndMinute, u2EndMinute);
	var paddedHour = pad(u1StartHour, 2);
	return paddedHour + ":" + paddedMinute + ":00.000Z";
}

function constructStartTime(u1StartMinute, u2StartMinute, startHour){
	var paddedMinute = checkAndPadStartMinutes(u1StartMinute, u2StartMinute);
	var paddedHour = pad(u1StartHour, 2);
	return paddedHour + ":" + paddedMinute + ":00.000Z";
}

function checkAndPadEndMinutes(u1EndMinute, u2EndMinute){
	var minute;
	if(u2EndMinute < u1EndMinute){
		minute = u2EndMinute;
	} else{
		minute = u1EndMinute;
	}

	return pad(minute, 2);
}

function checkAndPadStartMinutes(u1StartMinute, u2StartMinute){
	var minute;
	if(u2StartMinute > u1StartMinute){
		minute = u2StartMinute;
	} else{
		minute = u1EndMinute;
	}

	return pad(minute, 2);
}

// http://stackoverflow.com/questions/6466135/adding-extra-zeros-in-front-of-a-number-using-jquery
function pad (str, max){
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
}










