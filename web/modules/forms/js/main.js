(function( $ ) {
	$.fn.Page_AccuCMSForm = function() {
		var $form = $(this);

		if(!$form.data("initialized")) {
			$form.data("initialized", true)

			$form.find('.form_email_control').inputmask({alias: "email", "clearIncomplete": true, "showMaskOnHover":false });
			$form.find('.form_phone_control').attr("data-inputmask-regex", "[0-9()+-]{25}").inputmask("Regex", {"clearIncomplete": false, "showMaskOnHover":false });
			$form.find(".form_date_control").datepicker();
			$form.find('.form_time_control').inputmask({ alias: "hh:mm", "clearIncomplete": true, "showMaskOnHover":false, "hourFormat": 12});

			$form.attr("onSubmit", "");
			$form.append('<input type="hidden" name="async_form" value="1"/>');
			$form.prepend('<div style="display:none;" class="mb form_status alert alert-success"></div>');
			$form.prepend('<div style="display:none;" class="mb form_error alert alert-danger"></div>');

			var $formSubmitButton = $form.find(".frm_submit_btn");
			$formSubmitButton.after('<button type="button" class="btn btn-default frm_loading_btn" onClick="javascript:void(0)" style="display:none;">Submitting <span class="fa fa-refresh fa-spin"></span></button>');

			var $formStatus = $form.find(".form_status");
			var $formError = $form.find(".form_error");
			var $formLoadingButton = $form.find(".frm_loading_btn");

			$form.submit(function(e){
				e.preventDefault();

				var $inputs = $('input[type="file"]:not([disabled])', $form); //select input files
			    $inputs.each(function(_, input) {
    			    if (input.files.length > 0) return ;
        			$(input).prop('disabled', true) //if the input doesn't have uploaded files will be disable - safari bugfix
			    })

				var strErr = "";
	    		var formData = new FormData($form[0]);// create the form data
		    	$inputs.prop('disabled', false);//

				$formStatus.html("").hide();
				$formError.html("").hide();

				if ($form.find(".g-recaptcha").length) {
					if (grecaptcha.getResponse().length === 0) {strErr += "Incorrect Captcha<br/>";}
				}

				if (strErr=="") {
					$formSubmitButton.hide();
					$formLoadingButton.show();	

					$.ajax({
						type   : "POST",
						cache  : false,
						contentType: false,
						processData: false,
						url    : $form.attr("action"),
						data   : formData,
						dataType: "json",
						success: function (data) {
							if ($form.find(".g-recaptcha").length) {
								grecaptcha.reset();
							}
							setTimeout(function(){
								$formSubmitButton.show();
								$formLoadingButton.hide();	
			
								if (data.status=="1") {
									$formStatus.html(data.msg).show();
									$form.clearForm();
									if (data.redirect_url != "") {
										window.location.href = data.redirect_url;
									}
								} else {
									$formError.html(data.msg).show();
								}
								$("html, body").animate({ scrollTop: $form.offset().top - (($(window).width()>991)?100:15) }, "slow");
							}, 400); 
						},
						error: function(jqxhr, status, errorMsg) {
							setTimeout(function(){
								$formLoadingButton.hide();
								$formSubmitButton.show();
								$formError.html("Internal Server Error.").show();
								$("html, body").animate({ scrollTop: $form.offset().top - (($(window).width()>991)?100:15) }, "slow");
							}, 400); 
						}
					});
				} else {
					$formError.html(strErr).show();
					$("html, body").animate({ scrollTop: $form.offset().top - (($(window).width()>991)?100:15) }, "slow");
				}
			});
		}
	}
})(jQuery);

$(document).ready(function(){
	$("form[data-async=true]").each(function(){
		$(this).Page_AccuCMSForm();
	});
});
