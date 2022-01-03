$(document).ready(function(){

	/********** HOMEPAGE: MASTHEAD - OUR CLIENTS SLIDER **********/
	var $homepageMasthead_OurClients_Slider = $('#clients-logos-slider');
	if ($homepageMasthead_OurClients_Slider.length) {
		$homepageMasthead_OurClients_Slider.slick({
			slidesToShow: 11,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			arrows: false,
			touchThreshold:20,
			autoplay: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 8
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 6
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 5
					}
				}
			]
		});
	}
	/********** END HOMEPAGE: MASTHEAD - OUR CLIENTS SLIDER **********/


	/********** HOMEPAGE: TESTIMONIALS SLIDER **********/
	var $homepage_Testimonials_Slider = $('.testimonial-slider');
	if ($homepage_Testimonials_Slider.length) {
		$homepage_Testimonials_Slider.slick({
			accessibility: false,
			infinite: false,
			dots: true,
			arrows: false,
			fade: true,
			autoplay: false,
		});
	}
	/********** END HOMEPAGE: TESTIMONIALS SLIDER **********/


	/********** INTERNAL: OUR TEAM SLIDER **********/
	var $internal_OurTeam_Slider = $('.team-slider');
	if ($internal_OurTeam_Slider.length) {
		$internal_OurTeam_Slider.slick({
			accessibility: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: false,
			dots: true,
			arrows: false,
			autoplay: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						dots: true,
						arrows: false,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
					}
				}
			]
		});
	}
	/********** END INTERNAL: OUR TEAM SLIDER **********/


	/********** OUR SPECIALTY: PORTFOLIO SLIDER **********/
	var $specialty_Portfolio_Slider = $('.specialty-related-projects-slider');
	if ($specialty_Portfolio_Slider.length) {
		$specialty_Portfolio_Slider.slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: false,
			arrows: true,
			centerMode: true,
			centerPadding: 0,
			prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left fa-2x"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right fa-2x"></span></button>',
			autoplay: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						dots: true,
						arrows: false
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						dots: true,
						arrows: false,
						dots: true,
						arrows: false
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
						dots: true,
						arrows: false
					}
				}
			]
		});
	}
	/********** END OUR SPECIALTY: PORTFOLIO SLIDER **********/

	/********** RELATED PROJECTS SLIDER **********/
	$('.related-projects-slider:not(.slider-type-casestudy)').slick({
		accessibility: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: false,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left fa-2x"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right fa-2x"></span></button>',
		autoplay: false,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					dots: true,
					arrows: false
				}
			}
		]
	});
	/********** END RELATED PROJECTS SLIDER **********/

	/********** RELATED CASE STUDIES SLIDER **********/
	$('.related-projects-slider.slider-type-casestudy').slick({
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left fa-2x"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right fa-2x"></span></button>',
		autoplay: false,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					dots: true,
					arrows: false
				}
			}
		]
	});
	/********** END RELATED CASE STUDIES SLIDER **********/

});
