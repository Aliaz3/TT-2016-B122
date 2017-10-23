/**
 * Administrador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema : true,
  attributes: {
	tipo: {
		type: 'string',
		required: true
	},
	nombre: {
		type: 'string',
		required: true
	},
	apellidoM: {
		type:'string'
	},
	apellidoP: { 
		type:'string'
	},
	usuario: {
		type:'string',
		required: true,
		unique: true
	},
	contrasenaE: {
		type:'string'
	},
	toJSON: function() {
		var obj = this.toObject();
		delete obj.contrasenaE;
		delete obj._csrf;
		
		return obj;
	}
  },
  
  beforeCreate: function (values, next){
	  if(!values.contrasena || values.contrasena!=values.confirmacion){
		  return next({err: ["Las contraseñas no son iguales."]});
	  }
	  require('bcrypt').hash(values.contrasena, 10, function passwordEncrypted(err, contrasenaE){
		  if(err) return next(err);
		  values.contrasenaE = contrasenaE;
		  //values.online = true;
		  next();
	});
  }
	
};

