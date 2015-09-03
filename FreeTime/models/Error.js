exports.badRequestError = function(){
	var err = new Error('Bad Request');
    err.status = 400;
    return err;
}