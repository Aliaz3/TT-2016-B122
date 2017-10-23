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
	},
	
	AdminListadoUsuarios: function (req, res, next){
		console.log(new Date());
		console.log(req.session.authenticated);
		Administrador.find(function foundUsers (err, users){
			res.view({
				users: users
			});
		});
	},
	
	editar: function (req, res, next){
		Administrador.findOne(req.param('id'), function foundUser (err, user){
			if (err) return next(err);
			if (!user) return next();
			
			res.view({
				user: user
			});
		});
	},
	
	update: function (req, res, next){
		Administrador.update(req.param('id'), req.params.all(), function userUpdated (err){
			if(err){
				return res.redirect('/administrador/editar/' + req.param('id'));
			}
			res.redirect('/administrador/show/' + req.param('id'));
		});
	},
	
	destroy: function (req, res, next){
		Administrador.findOne(req.param('id'), function foundUser (err, user) {
			if (err) return next(err);
			if (!user) return next('no existe el usuario.');
			
			Administrador.destroy(req.param('id'), function userDestroyed(err) {
				if (err) return next(err);
			});
			res.redirect('/administrador/AdminListadoUsuarios');
		});
	}
	
	
};

