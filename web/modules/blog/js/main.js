$(document).ready(function(){
	$("#blog-module-wrap .blog-cta-wrapper").each(function(){
		if($(this).html()<=2){
			$(this).remove();
		}		
	});
});