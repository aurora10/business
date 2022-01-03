(function( $ ) {
	$.fn.BlogPost = function() {
		var $container = $(this);


		/* ========================================================================
		 * Login Form
		 * ========================================================================*/
		var $blogLoginModal = $("#login-modal");
		var $blogLoginForm = $blogLoginModal.find('form[name="frmBlogLogin"]').first();
		var $blogLoginFormStatus = $blogLoginForm.find(".form_status");

		$blogLoginModal.on("hidden.bs.modal", function () {
			$blogLoginForm.clearForm();
			$blogLoginFormStatus.html("").hide();
		});

		$blogLoginForm.submit(function(e){
			e.preventDefault();
			$blogLoginFormStatus.hide().html("");
			var strErr = "";
			if (strErr == "") {
				$.ajax({
					url: 'web/modules/blog/ajax/login.asp',
					type: 'POST',
					data: $blogLoginForm.serializeArray(),
					dataType: "json",
					cache: false,
					success: function (data) {
						if(data.status == "1") {
							location.reload();
						} else {
							$blogLoginFormStatus.html(data.msg).show();
						}
					} 
				});
			}
		});


		/* ========================================================================
		 * Registration Form
		 * ========================================================================*/
		var $blogRegistrationModal = $("#register-modal");
		var $blogRegistrationForm = $blogRegistrationModal.find('form[name="frmBlogReg"]').first();
		var $blogRegistrationFormStatus = $blogRegistrationForm.find(".form_status");

		$blogRegistrationForm.find(".custom_upload_control").each(function(){
			var control = $(this);
			var uploadFile = control.find(".upload_file_btn input[type='file']");
			var uploadCaption = control.find(".upload_file_caption");

			uploadFile.change(function(){
				var fileName = $(this)[0].files[0].name;
				uploadCaption.val(fileName);
			});
		});

		$blogRegistrationForm.submit(function(e){
			e.preventDefault();
			$blogRegistrationFormStatus.hide().html("");

			var strErr = "";
			if (strErr == "") {
				var formData = new FormData($blogRegistrationForm[0]);

				$.ajax({
					url: 'web/modules/blog/ajax/registration.asp?upload=1',
					type: 'POST',
					data: formData,
					dataType: "json",
					cache: false,
					contentType: false,
					processData: false,

					success: function (data) {
						if(data.status == "1") {
							location.reload();
						} else {
							$blogRegistrationFormStatus.html(data.msg).show();
						}
					} 
				});
			}
		});


		/* ========================================================================
		 * Blog Comment Form
		 * ========================================================================*/
		$.fn.BlogComment = function() {
			var $container = $(this);
			var $status = $container.find(".alert");
			var $comment = $container.find('textarea');
			var $button = $container.find('[type="button"]');
			var postID = $container.data("comment-post");
			var parentCommentID = $container.data("comment-parent");


			$comment.css('overflow', 'hidden').autogrow();

			$button.click(function(){
				$status.hide().html("").removeClass("alert-success").removeClass("alert-danger");

				var strErr = "";
				if (strErr == "") {
					var obj = {
						postid: postID,
						commentid: parentCommentID, 
						comment: $comment.val()
					};


					$.ajax({
						url: 'web/modules/blog/ajax/post_comment.asp',
						type: 'POST',
						data: obj,
						dataType: "json",
						cache: false,
						success: function (data) {
							if (data.status=="1") {
								$status.html(data.msg).addClass("alert-success").show();
								$comment.val("").keydown();

								setTimeout(function(){$status.hide();},2000);
							} else {
								$status.html(data.msg).addClass("alert-danger").show();
							}
						} 
					});


				}
			});

		}

		$container.find("[data-comment-post]").each(function(){
			$(this).BlogComment();
		});


		$container.find(".comment-item").each(function(){
			var $comment = $(this);
			var $replyLink = $comment.find(".comment-content .reply-link:first");
			$replyLink.click(function(){
				$replyLink.hide();
				$comment.find(".comment-content .replay-controls-wrap:first").show();
			});
		});
	}
})(jQuery);

$(document).ready(function(){
	$("#blog-post").BlogPost();
});


