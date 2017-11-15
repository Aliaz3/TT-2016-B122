/**
 * Padre.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	pnombre:{
		type: 'string',
		required: true
	},
	papepaterno: {
		type: 'string',
		required: true
	},
	papematerno: {
		type: 'string',
		required: true
	},
	plugarnacimiento: {
		type: 'string'
	},
	pfnacimiento: {
		type: 'date'
	},
	pestadocivil: {
		type: 'string'
	},
	pocupacion: {
		type: 'string'
	},
	padscripcion: {
		type: 'string'
	},
	pescolaridad: {
		type: 'string'
	},
	pcelular: {
		type: 'integer'
	},
	ptelefonot: {
		type: 'integer'
	},
	pextension: {
		type: 'integer'
	},
	pcallet: {
		type: 'string'
	},
	pnoextt: {
		type: 'string'
	},
	pnointt: {
		type: 'string'
	},
	pcoloniat: {
		type: 'string'
	},
	pdelegaciont: {
		type: 'string'
	},
	pestadot: {
		type: 'string'
	},
	pcpt: {
		type: 'integer'
	},
	pcelulart: {
		type: 'integer'
	},
	phorariot: {
		type: 'string'
	},
	preligion: {
		type:'string'
	},
	phijos: {
		collection: 'nino',
        via: 'npadre'
	}
  }
};

