(function( $ ) {
	$.fn.ProjectsListing = function() {
		var $container = $(this);
		var $form = $container.find("form[name='frmProjectsListing']").first();

		if($.QueryString["search"]=="1") {
			ScrollToAnchor("#results");
		}


		$container.find(".pagination-wrap [data-page]").each(function(){
			var $a = $(this);
			$a.click(function(){
				$form.find("input[name='page']").val($a.data("page"));
				$form.submit();
			});
		});


		$container.find(".tag-wrapper [data-id]").each(function(){
			var $a = $(this);
			$a.click(function(){
				$form.find("input[name='search_category']").val($a.data("id"));
				$form.submit();
			});
		});


		$form.submit(function(){
			$form.Form_BeforeSubmit();
		});

	}
})(jQuery);

$(document).ready(function(){
	$("#page-wrap").ProjectsListing();
});
