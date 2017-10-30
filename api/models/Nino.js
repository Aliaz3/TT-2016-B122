/**
 * Nino.js
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
  	grupo:{
  		type:'string'
  	},
  	leh:{
  		type:'string'
  	},
  	calle:{
  		type:'string'
  	},
  	noe:{
  		type:'integer'
  	},
  	noi:{
  		type:'integer'
  	},
  	colonia:{
  		type:'string'
  	},
  	delegacion:{
  		type:'string'
  	},
  	estado:{
  		type:'string'
  	},
  	cp:{
  		type:'integer'
  	},
  	telefono:{
  		type:'integer'
  	},
  	celular:{
  		type:'integer'
  	},
  	FAC144: {
      collection:'FAC144',
      via: 'nino'
    },
    tutor: {
      model: 'tutor'
    },
    paut:{
    	collection:'pautorizada',
    	via: 'nino'
    }
  }
};

