exports.getISODateFromDateAndTime = function (date, time){
	var str = date + 'T' + time + ':00'
	return str
}