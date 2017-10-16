/**
 * AdministradorController
 *
 * @description :: Server-side logic for managing administradors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	'new': function (req, res){
		res.view();
	},
	
	create : function (req, res, next){
		Administrador.create( req.params.all(), function userCreated(err, user){
			if(err) {
				//console.log(err);
				req.session.flash={
					err:err
				}
				return res.redirect('/administrador/new');
			}
			//res.json(user);
			res.redirect('/administrador/show/'+user.id);
		});
	},
	
	show: function (req, res, next) {
		Administrador.findOne(req.param('id'), function foundUser(err, user){
			if (err) return next(err);
			if (!user) return next();
			res.view({
				user: user
			});
		});
	}
	
};

