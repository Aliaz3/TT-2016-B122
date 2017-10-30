/**
 * FAC144.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	fecha: {
  		type: 'string'
  	},
  	hora: {
  		type: 'string'
  	},
  	cicloE: {
  		type: 'string'
  	},
  	nino :{
  		model: 'Nino',
  		unique: true
  	}
  }
};

