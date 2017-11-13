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
	guardardatos : function(req, res, next){
		var ojb = req.allParams();
		console.log(ojb);
		res.redirect('/Trabajosocial/');
	}
	
};

