/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');
module.exports = {
	index: function(req, res){
		var Fechaant = new Date();
		var Fechanew = new Date(Fechaant.getTime() + 60000);
		req.session.cookie.expires = Fechanew;
		console.log(req.session);
		res.view('session/index');
	},
	
	create: function(req, res, next){
		var usuario = req.param('usuario');
		var contrasena = req.param('contrasena');
		if(!usuario ||!contrasena){
			var noUsernameOrPasswordError=[{message:'Debe ingresar un usuario y contraseña'}]
			req.session.flash={
				err:noUsernameOrPasswordError
			}
			return res.redirect('/session/index');
		}
		
		Administrador.findOneByUsuario(usuario, function userFounded (err, user){
			if(err){
				req.session.flash={
					err:err
				}
				return res.redirect('/session/index');
			}
			
			if(!user){
				var noUserFoundedError=[{message:'El nombre de usuario no se encuentra'}]
				req.session.flash={
					err:noUserFoundedError
				}
				return res.redirect('/session/index');
			}
			
			bcrypt.compare(contrasena, user.contrasenaE, function passwordsMatch(err, valid){
				if(err){
				req.session.flash={
					err:err
				}
				return res.redirect('/session/index');
			}
			
			if(!valid){
				var passwordDoNotMatchError=[{message:'Las contraseñas no coinciden'}]
				req.session.flash={
					err:passwordDoNotMatchError
				}
				return res.redirect('/session/index');
			}
			
			req.session.authenticated = true;
			req.session.User = user;
			res.redirect('/administrador/show/'+user.id);
			});
		});
	},
	
	destroy: function(req, res, next){
		req.session.destroy();
		res.redirect('/session/index');
	}
};

