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
	'ingreso': function (req, res, next){
		Derechohabiente.findOne(req.param('id'), function foundUser(err, user){
			if (err) return next(err);
			if (!user) return next();
			res.view({
				user: user
			});
		});
	},
	'ingresarderechohabiente' :function (req, res, next){
		res.view();
	},
	'ingresarpadre' :function (req, res, next){
		res.view();
	},
	'ingresarpautorizada' : function (req, res, next){
		res.view();
	},
	'vernino': function (req, res){
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
	act130 : function (req, res){
		var date = new Date();
		console.log(date);
		console.log('1');
		 var year = date.getFullYear();

		var month = date.getMonth() + 1;
		month = (month < 10 ? "0" : "") + month;

		var day  = date.getDate();
		day = (day < 10 ? "0" : "") + day;
		var ojb = req.allParams();
		console.log(ojb);
				//res.writeHead(200, {'Content-Type': 'application/pdf'});
				console.log('2');
				var hummus = require('hummus');
				console.log('3');
				var pdfWriter = hummus.createWriterToModify('C:\\Users\\Alan\\Documents\\TT-2016-B122\\FACS\\TRABAJO SOCIAL\\FAC130.PDF',{modifiedFilePath:'C:\\Users\\Alan\\Documents\\TT-2016-B122\\FACS\\TRABAJO SOCIAL\\FAC1302.PDF'});
				console.log('4');
				var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
				/*var page = pdfWriter.createPage(0,0,595,842);
				pdfWriter.startPageContentContext(page).writeText('Hello World',
                                                  0,400,
                                                  {
                                                    font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
                                                    size:50,
                                                    colorspace:'gray',
                                                    color:0x00
                                                  });
				pdfWriter.writePage(page);*/
				var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
				pageModifier.startContext().getContext().writeText(
					day,
					270,136,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					month,
					380,136,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					year,
					455,136,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.endContext().writePage();
				console.log('1');
				pdfWriter.end();
				console.log("fin");
				res.redirect('/Trabajosocial/');
	},
	guardarderechohabiente : function(req, res, next){
		var ojb = req.allParams();
		console.log(ojb);
		Derechohabiente.create( req.params.all(), function userCreated(err, user){
			if(err) {
				console.log(err);
				req.session.flash={
					err:err
				}
				return res.redirect('/Trabajosocial/ingresarderechohabiente/');
			}
			console.log(json(user));
			res.redirect('/Trabajosocial/ingreso/'+user.id);
		});
		//res.redirect('/Trabajosocial/ingresarderechohabiente/');
	},
	guardarnino : function(req, res, next){
		var ojb = req.allParams();
		console.log(ojb);
		Nino.create( req.params.all(), function userCreated(err, user){
			if(err) {
				console.log(err);
				req.session.flash={
					err:err
				}
				return res.redirect('/Trabajosocial/ingreso/');
			}
			//res.json(user);
			res.redirect('/Trabajosocial/ingresarpadre/'+user.id);
		});
		//res.redirect('/Trabajosocial/ingresarderechohabiente/');
	},
	guardarpadre : function(req, res, next){
		var ojb = req.allParams();
		console.log(ojb);
		Padre.create( req.params.all(), function userCreated(err, user){
			if(err) {
				console.log(err);
				req.session.flash={
					err:err
				}
				return res.redirect('/Trabajosocial/ingresarpadre/');
			}
			//res.json(user);
			res.redirect('/Trabajosocial/ingresarpautorizada/'+user.id);
		});
		//res.redirect('/Trabajosocial/ingresarderechohabiente/');
	},
	guardarpa : function(req, res, next){
		var ojb = req.allParams();
		console.log(ojb);
		Personaautorizada.create( req.params.all(), function userCreated(err, user){
			if(err) {
				console.log(err);
				req.session.flash={
					err:err
				}
				return res.redirect('/Trabajosocial/ingresarpadre/');
			}
			//res.json(user);
			res.redirect('/Trabajosocial/ingresarpautorizada/'+user.id);
		});
		//res.redirect('/Trabajosocial/ingresarderechohabiente/');
	},
	fac11 : function (req, res){
		var date = "palabra";
				//res.writeHead(200, {'Content-Type': 'application/pdf'});
				console.log('2');
				var hummus = require('hummus');
				console.log('3');
				var pdfWriter = hummus.createWriterToModify('C:\\Users\\Alan\\Documents\\TT-2016-B122\\FACS\\TRABAJO SOCIAL\\FAC11.PDF',{modifiedFilePath:'C:\\Users\\Alan\\Documents\\TT-2016-B122\\FACS\\TRABAJO SOCIAL\\FAC11mod.PDF'});
				console.log('4');
				
				/*var page = pdfWriter.createPage(0,0,595,842);
				pdfWriter.startPageContentContext(page).writeText('Hello World',
                                                  0,400,
                                                  {
                                                    font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
                                                    size:50,
                                                    colorspace:'gray',
                                                    color:0x00
                                                  });
				pdfWriter.writePage(page);*/
				var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
				
				pageModifier.startContext().getContext().writeText(
					date,
					205,660,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					420,635,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					90,595,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					195,595,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					410,595,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					180,562,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					385,562,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					500,562,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					150,529,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);pageModifier.startContext().getContext().writeText(
					date,
					460,529,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					160,505,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);pageModifier.startContext().getContext().writeText(
					date,
					270,505,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					360,505,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					480,505,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					80,480,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);pageModifier.startContext().getContext().writeText(
					date,
					210,480,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					320,480,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					450,480,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					90,422,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);pageModifier.startContext().getContext().writeText(
					date,
					210,422,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					440,422,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					240,390,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					440,390,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					110,360,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					300,360,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					160,330,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);pageModifier.startContext().getContext().writeText(
					date,
					270,330,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					360,330,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					480,330,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				
				
				
				
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					80,303,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);pageModifier.startContext().getContext().writeText(
					date,
					210,303,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					290,303,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					450,303,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					100,273,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
					pageModifier.startContext().getContext().writeText(
					date,
					295,273,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					470,273,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					90,233,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
					pageModifier.startContext().getContext().writeText(
					date,
					195,233,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					440,233,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					240,202,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					440,202,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					110,173,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					370,173,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					160,140,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					270,140,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					370,140,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					date,
					480,140,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					80,118,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
					pageModifier.startContext().getContext().writeText(
					date,
					220,118,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					340,118,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					91,85,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					300,85,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					451,85,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.endContext().writePage();
				console.log('1');
				var date="asdfghjk";
				
				var pageModifier = new hummus.PDFPageModifier(pdfWriter,1,true);
				
				pageModifier.startContext().getContext().writeText(
					date,
					90,655,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					250,655,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					430,655,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					200,600,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					405,600,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					200,570,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					435,570,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
			
				
				
				pageModifier.startContext().getContext().writeText(
					date,
					200,540,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					435,540,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
			pageModifier.startContext().getContext().writeText(
					date,
					150,510,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					350,510,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
					
				pageModifier.startContext().getContext().writeText(
					date,
					160,460,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					270,460,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
			pageModifier.startContext().getContext().writeText(
					date,
					370,460,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					480,460,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					90,410,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
			pageModifier.startContext().getContext().writeText(
					date,
					200,410,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					date,
					390,410,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.endContext().writePage();
				console.log('1');
				pdfWriter.end();
				console.log("fin");
				res.redirect('/Trabajosocial/');
	},
		prueba : function (req, res){
		var date = new Date();
		console.log(date);
		console.log('1');
		 var year = date.getFullYear();

		var month = date.getMonth() + 1;
		month = (month < 10 ? "0" : "") + month;

		var day  = date.getDate();
		day = (day < 10 ? "0" : "") + day;
		var ojb = req.allParams();
		console.log(ojb);
		var cendi = "Clementina Batalla de Basolls";
				//res.writeHead(200, {'Content-Type': 'application/pdf'});
				console.log('2');
				var hummus = require('hummus');
				console.log('3');
				var pdfWriter = hummus.createWriterToModify('C:\\Users\\Alan\\Documents\\TT-2016-B122\\FACS\\TRABAJO SOCIAL\\FAC131.PDF',{modifiedFilePath:'C:\\Users\\Alan\\Documents\\TT-2016-B122\\FACS\\TRABAJO SOCIAL\\FAC1312.PDF'});
				console.log('4');
				var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
				/*var page = pdfWriter.createPage(0,0,595,842);
				pdfWriter.startPageContentContext(page).writeText('Hello World',
                                                  0,400,
                                                  {
                                                    font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
                                                    size:50,
                                                    colorspace:'gray',
                                                    color:0x00
                                                  });
				pdfWriter.writePage(page);*/
				var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
				pageModifier.startContext().getContext().writeText(
					day,
					350,580,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					month,
					430,580,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				pageModifier.startContext().getContext().writeText(
					year,
					505,580,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:15,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.startContext().getContext().writeText(
					cendi,
					110,497,
					{font:pdfWriter.getFontForFile('C:\\Users\\Alan\\Documents\\TT-2016-B122\\fonts\\open-sans\\OpenSans-Regular.ttf'),
					size:12,
					colorspace:'black',
					color:0x00
					}
				);
				
				pageModifier.endContext().writePage();
				console.log('1');
				pdfWriter.end();
				console.log("fin");
				res.redirect('/Trabajosocial/');
	},
	
};

