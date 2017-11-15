/**
 * Derechohabiente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	dnombre:{
		type: 'string',
		required: true
	},
	dapepaterno: {
		type: 'string',
		required: true
	},
	dapematerno: {
		type: 'string',
		required: true
	},
	dlugarnacimiento: {
		type: 'string'
	},
	dfnacimiento: {
		type: 'date'
	},
	destadocivil: {
		type: 'string'
	},
	dcurp: {
		type: 'string'
	},
	demail: {
		type: 'string'
	},
	docupacion: {
		type: 'string'
	},
	dadscripcion: {
		type: 'string'
	},
	descolaridad: {
		type: 'string'
	},
	dcelular: {
		type: 'integer'
	},
	dtelefonot: {
		type: 'integer'
	},
	dextension: {
		type: 'integer'
	},
	dcallet: {
		type: 'string'
	},
	dnoextt: {
		type: 'string'
	},
	dnointt: {
		type: 'string'
	},
	dcoloniat: {
		type: 'string'
	},
	ddelegaciont: {
		type: 'string'
	},
	destadot: {
		type: 'string'
	},
	dcpt: {
		type: 'integer'
	},
	dcelulart: {
		type: 'integer'
	},
	dhorariot: {
		type: 'string'
	},
	dcategoriat: {
		type: 'string'
	},
	dnoempleado: {
		type: 'string'
	},
	dsueldo: {
		type: 'float'
	},
	dfechaiipn: {
		type: 'date'
	},
	dnombrejefe: {
		type: 'string'
	},
	dcargojefe: {
		type: 'string'
	},
	drfc: {
		type: 'string'
	},
	dpuesto: {
		type: 'string'
	},
	dzonapagadora: {
		type: 'string'
	},
	dcvepresupuestal: {
		type: 'string'
	},
	dhijos: {
		collection: 'nino',
        via: 'nderecho'
	}
	
	
  }
};

