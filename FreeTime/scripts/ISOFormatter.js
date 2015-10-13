// ISOFormatter.js
// Ankur Goswami
// 6 October 2015

exports.getISODateFromDateAndTime = function (date, time){
	var str = date + 'T' + time + ':00';
	return str;
}

exports.getTimeFromISODate = function (ISO){
	var date = new Date(ISO);
	var ISOString = date.toISOString();
	var splitString = ISOString.split('T');
	return splitString[0];
}

exports.getDateFromISODate = function (ISO){
	var date = new Date(ISO);
	var ISOString = date.toISOString();
	var splitString = ISOString.split('T');
	console.log(splitString[1]);
	return splitString[1];
}

exports.verifyStringIsISO = function (ISO){
	var isoRegex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+/

	if (ISO.match(isoRegex) == null){
		return false;
	}
	return true;
}

exports.convertISOToDateString = function( ISO ) {
	var date = new Date(ISO);
	return date.toTimeString();
}