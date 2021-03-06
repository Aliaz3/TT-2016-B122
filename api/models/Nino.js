/**
 * Nino.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
	nnombre: {
		type: 'string',
		required: true
	},
	napepaterno:{
		type: 'string',
		required: true
	},
	napematerno:{
		type: 'string',
		required: true
	},
	nfnacimiento:{
		type: 'date',
		required: true
	},
	nanos:{
		type: 'integer'
	},
	nmeses:{
		type: 'integer'
	},
	ngrupoacursar:{
		type: 'string'
	},
	ngrupoprocedencia:{
		type: 'string'
	},
	ngrupoactual:{
		type: 'string'
	},
	nlugarhermanos:{
		type: 'integer'
	},
	ngruposanguineo:{
		type: 'string'
	},
	nrh:{
		type: 'string'
	},
	ncurp:{
		type: 'string',
		required: true
	},
	ncalle:{
		type: 'string'
	},
	nnumeroext:{
		type: 'string'
	},
	nnumeroint:{
		type:'string'
	},
	ncolonia:{
		type:'string'
	},
	ndelegacion:{
		type: 'string'
	},
	nestado:{
		type: 'string'
	},
	ncp:{
		type: 'integer'
	},
	ntelefono :{
		type: 'integer'
	},
	nderecho: {
		model:'derechohabiente',
	},
	npadre: {
		model:'padre',
	},
	npersona: {
		model:'personaautorizada',
        unique: true
	} 	
  }
};

