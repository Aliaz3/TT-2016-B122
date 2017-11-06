/**
 * TrabajoSocialController
 *
 * @description :: Server-side logic for managing Trabajosocials
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'index': function (req, res){
		res.view();
	},
	'FAC130': function (req, res){
		res.view();
	},
	'FAC144': function (req, res){
		res.view();
	},
	'FAC11': function (req, res){
		res.view();
	},
	'FAC13': function(req,res){
		res.view();
	},
	'FAC14': function(req,res){
		res.view();
	},
	Ingresoet : function (req, res, next){
		var ojb = req.allParams();
		console.log(ojb);
	},
	act130 : function (req, res, next){
		
	}
	
};

