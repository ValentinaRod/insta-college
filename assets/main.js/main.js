
$(document).ready(function(){
	$("form").attr('novalidate', 'novalidate'); //disables HTL5 validate Q from form
/*	$.get("https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json",
		function(data){
			  $( ".result" ).html( data );
			alert(data);
		});


		(make up UN & passwords)
*/
	function validate(){
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
	}

	$("#submit").click(function(){
		var hasError = false;
		var passwordValue = $("#password").val();
		var userNameValue = $("#username").val();

		if(passwordValue == '' && userNameValue == ''){
			$("#submit").on("click", function(){
				$(this).after('<div id="error2">Verifica e intenta de nuevo.</div>');
				$(this).off();
			});
			hasError = true;
		} else if (passwordValue == ''){
			$("#submit").on("click", function(){
				$(this).after('<div id="error1">Sorry, tu password es incorrecto. Por favor revisa tu password</div>');
				$(this).off();
			});
			hasError = true;
		} else if (userNameValue == ''){
			$("#submit").on("click", function(){
				$(this).after('<div id="error2">El usuario no corresponde.Por favor verifica tu usuario</div>');
			});
			hasError = true;
		}
	//	if(hasError == true){ return false;}
});
});
