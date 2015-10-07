// ISOFormatter.js
// Ankur Goswami
// 6 October 2015

exports.getISODateFromDateAndTime = function (date, time){
	var str = date + 'T' + time + ':00';
	return str;
}

exports.getDateFromISODate = function (ISO){
	var splitString = ISO.split('T');
	return splitString[0];
}

exports.verifyStringIsISO = function (ISO){
	var isoRegex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+/
	
	if (ISO.match(isoRegex) == null){
		return false;
	}
	return true;

}