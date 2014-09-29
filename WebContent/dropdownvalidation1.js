/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	//global vars
	var form = $("#dropdownvalidation"); 
	
	
	var phone = $("#qtyid");
	var phoneInfo = $("#postalcodeinfo");
	phone.blur(validatePhone);
	phone.keyup(validatePhone); 
	 
	//On Submitting
	form.submit(function(){
		if( validatePhone()  )
			return true
		else
			return false;
	});
	
	//validation functions 
	function validatePhone(){
		//it's NOT valid
			var b = phone.val();
		 var rcontact = /^[0-9]*$/;
		 
	 
		 
		 if(phone.val().length < 1 || phone.val().length > 4){
			phone.addClass("error");
			//phoneInfo.text("Phone Number is required");
			phoneInfo.addClass("error");
			return false;
		}
		else if(!rcontact.test(b))
		{
				b=" ";
			phone.addClass("error");
			phoneInfo.text("Numbers only Allowed");
		
			phoneInfo.addClass("error");
			return false;
		}
		//it's valid
		else{			
			phone.removeClass("error");
			phoneInfo.text("");
			phoneInfo.removeClass("error");
			return true;
		}
		 
	}
	
	
});