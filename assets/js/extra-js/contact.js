!function(e){"use strict";if(e.fn.validate){var a=e("#contact-form"),r=a.find(".btn");a.validate({rules:{contactname:"required",contactwebsite:{required:!0,url:!0},contactsubject:"required",contactemail:{required:!0,email:!0},contactmessage:{required:!0,minlength:40}},messages:{contactname:"This field is required. Please enter your name.",contactwebsite:{required:"This field is required. Please enter your website.",email:"Please enter a valid url."},contactsubject:"This field is required. Please enter a subject.",contactemail:{required:"This field is required. Please enter your email address.",email:"Please enter a valid email address."},contactmessage:{required:"This field is required. Please enter your message.",minlength:"Your message must be at least 40 characters long."}},submitHandler:function(a){return e(document).ajaxStart(function(){r.button("loading")}).ajaxStop(function(){r.button("reset")}),e.ajax({type:"post",url:"assets/php/mail.php",data:e(a).serialize()}).done(function(e){"success"==e?alert("Email has been sent successfully!"):"already"==e?alert("You already sent a message. Please try again later"):alert("There is an error please try again later!")}).error(function(){alert("There is an error please try again later!")}),!1}})}}(jQuery);
