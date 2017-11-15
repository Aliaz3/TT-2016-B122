/**
 * Personaautorizada.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	anombre:{
		type: 'string',
		required: true
	},
	aapepaterno: {
		type: 'string',
		required: true
	},
	aapematerno: {
		type: 'string',
		required: true
	},
	alugarnacimiento: {
		type: 'string'
	},
	aparentesco: {
		type: 'date'
	},
	aestadocivil: {
		type: 'string'
	},
	aocupacion: {
		type: 'string'
	},
	aadscripcion: {
		type: 'string'
	},
	aescolaridad: {
		type: 'string'
	},
	acelular: {
		type: 'integer'
	},
	atelefonot: {
		type: 'integer'
	},
	aextension: {
		type: 'integer'
	},
	acallet: {
		type: 'string'
	},
	anoextt: {
		type: 'string'
	},
	anointt: {
		type: 'string'
	},
	acoloniat: {
		type: 'string'
	},
	adelegaciont: {
		type: 'string'
	},
	aestadot: {
		type: 'string'
	},
	acpt: {
		type: 'integer'
	},
	acelulart: {
		type: 'integer'
	},
	ahorariot: {
		type: 'string'
	},
	anino: {
		collection:'nino',
        via: 'npersona'
	}
  }
};

