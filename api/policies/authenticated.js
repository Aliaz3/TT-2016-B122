module.exports= function (req, res, ok){
	if(req.session.authenticated){
		return ok();
	}
	else{
		var requireLoginError=[{message:'debes iniciar session'}]
		console.log(requireLoginError);
		req.session.flash={
			err:requireLoginError
		}
		res.redirect('/session/index');
		return;
	}
	
};