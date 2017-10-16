$(document).ready(function(){
 
 	// Validate
 	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 	// http://docs.jquery.com/Plugins/Validation/
 	// http://docs.jquery.com/Plugins/Validation/validate#toptions
 
 		$('.form-singin').validate({
 	    rules: {
 	      tipo: {
 	        required: true
 	      },
 	      nombre: {
 	        required: true
 	      },
 	      usuario: {
 	        required: true
 	      },
 	      contrasena: {
 	      	minlength: 6,
 	      	required: true
 	      },
		  confirmacion: {
			  required: true,
			  minlength: 6,
			  equalTo: "#contrasena"
		  }
 	    },
 			success: function(element) {
 				element
 				.text('OK!').addClass('valid')
 			}
 	  });
 
 });