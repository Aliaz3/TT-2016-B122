/**
 * Pautorizada.js
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
  	parentesco:{
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
  	escolaridad:{
  		type:'string'
  	},
  	trabajo:{
  		type:'string'
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
  	nino:{
      model:'Nino',
      unique: true
    }
  }
};

