(function( $ ) {
	$.fn.QuickContactForm = function() {
		var $container = $(this);
		var $form = $container.find("form").first();
		var $formStatus = $container.find(".form_status");
		var $btnSubmit = $container.find(".frm_submit_btn");
		var $btnLoading = $container.find(".frm_loading_btn");
		var $phone = $form.find("input[name='phone']");

		$phone.intlTelInput({
			nationalMode: true,
      		autoHideDialCode: true,
      		formatOnDisplay: true,
      		nationalMode: true,
			preferredCountries: ['us'],
			utilsScript: "/web/assets/js/intltelinput/utils.js"
		});

		$phone.focus(function(){
			$(this).parent().addClass("red");
		});

		$phone.blur(function(){
			$(this).parent().removeClass("red");
		});

		$form.submit(function(e){
			e.preventDefault();

			$formStatus.hide().html("").removeClass("alert-danger").removeClass("alert-success");
			$btnSubmit.hide();
			$btnLoading.show();

			$form.find("input[name='phone_number']").val($phone.intlTelInput("getNumber"));
			$form.find("input[name='phone_extension']").val($phone.intlTelInput("getExtension"));
			$form.find("input[name='phone_valid']").val($phone.intlTelInput("isValidNumber"));

			var strErr = "";
			if (strErr == "") {
				$.ajax({
					url: '/web/modules/quickcontactform/ajax.asp',
					type: 'POST',
					data: $form.serializeArray(),
					dataType: "json",
					cache: false,
					success: function (data) {
						setTimeout(function(){
							$formStatus.html(data.msg).show();

							$btnSubmit.show();
							$btnLoading.hide();

							if(data.status == "1") {
								if(typeof ga !== "undefined"){
									ga('send', 'event', {
										eventCategory: 'Forms',
										eventAction: 'submit',
  										eventLabel: 'Quick Contact Form'
									});
								}

								$formStatus.addClass("alert-success");
								$form.clearForm();
							} else {
								$formStatus.addClass("alert-danger");
							}

							ScrollToAnchor("#quick_contact_app_form");
											
						}, 200);
					} 
				});
			} else {
				$formStatus.html(strErr).addClass("alert-danger").show();
			}
		});
	}
})(jQuery);

$(document).ready(function(){
	$("#quick-contact-app").QuickContactForm();
});

