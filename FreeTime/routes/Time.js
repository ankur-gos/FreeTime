//Basic time class.

module.exports = function() {


	// Output: current time in HH:MM AM
	var getCurrentTimeShort = function(){
		var date = new Date()
		var period = 'AM'
		var currentHour = convert24HourTimeTo12HourTime(date.getHours())
		if (currentHour.isPM)
			period = 'PM'
		var dateString = currentHour.hours + ':' + date.getMinutes() + ' ' + period
		console.log(dateString)
		return dateString

	}

	// Expected input: Integer 0-23
	// Ourput: Object returning hour 1-12 and whether it is PM
	var convert24HourTimeTo12HourTime = function someFunction(myHour){

		var hours;
		var isPM = false;

		if (myHour < 12) {
			hours = myHour - 1
		}
		else{
			hours = myHour - 12
			isPM = true
		}

		return {
			hours: hours,
			isPM: isPM
		}
	}


	return {
		currentTime: getCurrentTimeShort()
	}
}();