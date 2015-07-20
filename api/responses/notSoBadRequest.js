module.exports = function notSoBadRequest(data, includeCustomView) { 
//includeCustomView - take true/false to insert/not custom view
	var req = this.req;
	var res = this.res;
	var sails = req._sails;

	res.status(400);

	if (includeCustomView) {
		return res.view('400');
	}
	else {
		return res.jsonx(data);
	}
	sails.log.verbose('Sent (400 BadRequest) response: ' + data);
}