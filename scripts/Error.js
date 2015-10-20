// Error.js
// Ankur Goswami, 8 September 2015

exports.badRequestError = function(){
	var err = new Error('Bad Request');
    err.status = 400;
    return err;
}