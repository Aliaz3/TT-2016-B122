/**
 * Tutor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	nombre:{
  		type:'string'
  	},
  	apaterno:{
  		type:'string'
  	},
  	amaterno:{
  		type:'string'
  	},
  	fnac:{
  		type:'string'
  	},
  	lnac:{
  		type:'string'
  	},
  	ecivil:{
  		type:'string'
  	},
  	ocupacion:{
  		type:'string'
  	},
  	adscripcion:{
  		type:'string'
  	},
  	callet:{
  		type:'string'
  	},
  	noet:{
  		type:'integer'
  	},
  	noit:{
  		type:'integer'
  	},
  	coloniat:{
  		type:'string'
  	},
  	delegaciont:{
  		type:'string'
  	},
  	estadot:{
  		type:'string'
  	},
  	cpt:{
  		type:'integer'
  	},
  	telefonot:{
  		type:'integer'
  	},
  	celulart:{
  		type:'integer'
  	},
  	horario:{
  		type:'string'
  	},
  	telefono:{
  		type:'integer'
  	},
  	celular:{
  		type:'integer'
  	},
  	escolaridad:{
  		type:'string'
  	},
  	ninos:{
  		collection: 'Nino',
  		via: 'tutor'
  	}
  }
};

