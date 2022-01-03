$(document).ready(function(){
	var $imagesSlider = $('.project-details-slider');

	if ($imagesSlider.length) {
		$imagesSlider.on('init', function(event, slick){
			$(slick.$slides).removeClass("hidden-slide");
        });

		$imagesSlider.slick({
			accessibility: false,
			infinite: false,
			dots: true,
			arrows: false,
			fade: true,
			autoplay: false,
		});
	}

});
