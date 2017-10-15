$(document).ready(function(){
	$('.form-signin').validate({
		rules: {
			tipo: {
				required: true
				},
			nombre:{
				required: true
				},
			usuario:{
				required: true,
				minlength: 6
				},
			contrasena:{
				required: true,
				minlength: 6
			    },
			confirmacion: {
				required: true,
				minlength: 6,
				equalTo: "#contrasena"
				}
			},
			success: function(element){
				element
				.text('OK!').addClass('valid')
				}
			});
		});