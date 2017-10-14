/**
 * Administrador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

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
	}
  }
	
};

