/**
 * AdministradorController
 *
 * @description :: Server-side logic for managing administradors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	'new': function (req, res){
		res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash ={};
	},
	
	create : function (req, res, next){
		Administrador.create( req.params.all(), function userCreated(err, user){
			if(err) {
				console.log(err);
				req.session.flash={
					err:err
				}
				return res.redirect('/administrador/new');
			}
			res.json(user);
			req.session.flash ={};
		});
	}
	
};

