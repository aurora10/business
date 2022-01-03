/********** URL ANCHOR **********/
var forceURLAnchor = false;

if (window.location.hash  && window.location.hash!="#" && window.location.hash.indexOf("utm_source")<0 ) {
	forceURLAnchor = true;
	$('html, body').css("overflow", "hidden").css("opacity", "0");
}

$(window).on('load', function(){
	if (window.location.hash  && window.location.hash!="#" && forceURLAnchor) {
		setTimeout(function() {
			$('html, body').css("overflow", "visible");
			$('html, body').scrollTop(0);
			$('html, body').css("opacity", "1");
			ScrollToAnchor(window.location.hash);
		}, 0);
	}
});
/********** END URL ANCHOR **********/


$(document).ready(function() {

	/********** CUSTOM UPLOAD **********/
	$(".custom_upload_control").each(function(){
		var control = $(this);
		var uploadFile = control.find(".upload_file_btn input[type='file']");
		var uploadCaption = control.find(".upload_file_caption");

		uploadFile.change(function(){
			try{
				var fileName = $(this)[0].files[0].name;
				uploadCaption.val(fileName);
			}catch(e){
				uploadCaption.val(uploadCaption.attr("placeholder"));
			}
		});
	});
	/********** END CUSTOM UPLOAD **********/


	/********** CHOSEN DROPDWON **********/
	$(".custom_dropdown_control").each(function(){
		InitCustomDropdownControl($(this));
	});
	/********** END CHOSEN DROPDWON **********/


	/********** FORM PLACEHOLDER LABEL **********/
	$("form .form-group .input-wrap").each(function(){
		var $wrap = $(this);

		$wrap.find('.input-label').click(function() {
			$(this).next().focus();
		})

		$wrap.find('textarea[data-autogrow]').each(function(){$(this).css('overflow', 'hidden').autogrow();});

		$wrap.find('input[type="text"], input[type="email"], input[type="password"], textarea').each(function(){
			$(this).change(function() {
				if (""+$(this).val() != "") $wrap.addClass("has-content");
			});

			$(this).focusin(function() {
				$wrap.addClass("has-content");
			})
			.focusout(function() {
				var $input = $(this);
				setTimeout(function(){
					if (""+$input.val()=="" && !$input.hasClass("upload_file_caption"))$wrap.removeClass("has-content");
				}, 200);
			});

			$(this).change();
		});

	});
	/********** END FORM PLACEHOLDER LABEL **********/


	/********** RESPONSIVE TABLE **********/
	$(".textbox table").each(function(){
		var $table = $(this)
		var $th = $table.find("thead th");
		$table.find("tr").each(function(){
			$(this).find("td").each(function(ind){
				$(this).attr("data-th", $($th[ind]).text());
			});
		});
	})
	/********** END RESPONSIVE TABLE **********/


	/********** SMOOTH ANCHOR **********/
	$('a[id][name]:not([href])').addClass("anchor-link");

	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not("[aria-controls]").not('[data-toggle]').not('[data-fancybox]').each(function(){
		var $a = $(this);
		var href = $a.attr("href");

		$a.click(function(e){
			if (
		      window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
		      window.location.hostname == this.hostname
		    ) {
				e.preventDefault();
				ScrollToAnchor(this.hash);
			}
		});
	});
	/********** END SMOOTH ANCHOR **********/


	/********** SKIP MOBILE FOCUS **********/
	$("a").each(function(){
		var $a = $(this);
		$a.bind("touchstart", function(e) {
			return true;
		});
	});
	/********** END SKIP MOBILE FOCUS **********/


	/********** CLEAN EMPTY BLOCKS **********/
	$('h1, h2, h3, h4, h5, h6, .textbox').each(function(){
		if($(this).html()<=2){
			$(this).remove();
		}		
	});
	/********** END CLEAN EMPTY BLOCKS **********/


	/********** SCROLL UP BUTTON **********/
	$("#scrollup").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
	/********** END SCROLL UP BUTTON **********/


	/********** MOBILE NAV BUTTON **********/
	$("#mobile_nav_btn").click(function(){
		var b = $(this);
		var m = $(b.attr("data-target-custom"));
		if (m.hasClass("in")) {
			b.attr("aria-expanded","false");
			m.slideUp(400, function(){m.removeClass("in")});
		} else {
			b.attr("aria-expanded","true");
			m.slideDown(400, function(){m.addClass("in")});
		}
	});
	/********** END MOBILE NAV BUTTON **********/


	/********** NAV DROPDOWN **********/
	$(".navbar-nav .active").parents("li").addClass("active");

	$(".navbar-nav .dropdown-toggle").click(function(e){
		var li = $(this).parent();
		var btn = $(this);

		if (li.hasClass("open")) {
			btn.next().attr("style","display:block");
			btn.attr("aria-expanded","false");
			btn.next().slideUp(400, function(){
				li.removeClass("open")
			});
		} else {
			/*$(".navbar-nav .nav > li.open").each(function(){
				var t = $(this);
				t.find(".dropdown-menu").slideUp(400, function(){
					t.removeClass("open");
					t.find(".dropdown-toggle").attr("aria-expanded", "false");
				});
			});*/
			btn.attr("aria-expanded","true");
			btn.next().slideDown(400, function(){
				li.addClass("open");
				btn.next().attr("style","");
			});
		}
	});
	/********** END NAV DROPDOWN **********/


	/********** NAV DROPDOWN HOVER**********/
	if ($(window).width()>991) {
		// open by hover
		$(".navbar-nav .dropdown_split").each(function(){
			var a = $(this).find("a:first");
			$(this).mouseenter(function(e){
				var btn = a.next(".dropdown-toggle");
				if (btn.attr("aria-expanded")=="false") btn.click();
			});
		});

		// close by move outside
		$(".navbar-nav .dropdown").mouseleave(function(e){
			$( ".navbar-nav .dropdown-menu" ).clearQueue().finish();
	  		$(this).removeClass("open"); 
			$(this).find(".dropdown-toggle").attr("aria-expanded",false);
		});
	}
	/********** END NAV DROPDOWN HOVER**********/


	/********** SECONDARY NAVIGATION **********/
	// open by hover
	$(".side-nav-wrap .item.has_sublevel").each(function(){
		var a = $(this).find(".sublevel-toggle").first();
		$(this).mouseenter(function(e){
			if (a.attr("aria-expanded")=="false") a.click();
		});
	});


	// close by move outside
	$(".side-nav-wrap div").mouseleave(function(){
		$( ".side-nav-wrap div" ).clearQueue().finish();
		/*	$(this).removeClass("open"); 
		$(this).find(".dropdown-toggle").attr("aria-expanded",false);*/
	});

	/********** END SECONDARY NAVIGATION **********/


	/********** UPDATE NAVIGATION - OPEN LEFT **********/
	if ($(window).width()>768) {
		var navTopItems = $(".navbar-nav > li");
		navTopItems.each(function(index){
			if ($(this).hasClass("dropdown") && navTopItems.length-index<3) {
				var navDropdowns = $(this).children(".dropdown-menu");

				navDropdowns.each(function(){
					var $ul = $(this);
					$ul.addClass("open-left");

					$ul.find(".dropdown > .dropdown-menu").each(function(){
						$(this).addClass("open-left");
					});
				});
			}
		});
	}
	/********** END UPDATE NAVIGATION - OPEN LEFT **********/


	/********** SIDEBAR NAV **********/
	/*if ($(".side-nav").length) {
		$(".side-nav .dropdown_menu").each(function(){
			var $dropdown = $(this);
			var $li = $dropdown.parents("li");

			if (!$li.hasClass("active")) {
				$li.mouseenter(function(){
					$dropdown.slideDown(400);
				});
				$li.mouseleave(function(){
					$dropdown.slideUp(400, function(){$dropdown.clearQueue();});
				});
			}
		});
	}*/
	/********** END SIDEBAR NAV **********/


	/********** MODAL WITH SLIDER **********/
	$("[data-modal-slider='true']").each(function(){
		var $slider = $(this);
		var $modal = $slider.parents(".modal");
		$modal.on("shown.bs.modal", function (e) {
			$slider.show().slick('setPosition');
		});
	});
	/********** END MODAL WITH SLIDER **********/
		
});


function clear_str(str) {
	var s=str;
	s = s.replace(/[�\t.+]/g, '');
	s = s.replace(/\s{2,}/g, ' ');
	s = s.replace(/\t/g, ' ');
	s = $.trim(s);
	s = s.toString().replace(/(\r\n|\n|\r)/g,"");
	//s = s.toString().trim().replace(/(\r\n|\n|\r)/g,"");
	return s;
}


$.fn.redraw = function(){
	var obj = $(this);
	obj.hide(0, function(){
		obj.show();		
	});
};


$.fn.clearForm = function() {
	$(this).trigger('reset');
	$(':input',this).each(function(){
		$(this).blur();
	});

	$('input[type=checkbox]',this).each(function(){
		$(this).prop( "checked", false );
	});

	$('input[type=text]',this).each(function(){
		$(this).val("");
		$(this).blur();
	});

	$(this).find(".custom_dropdown_control").each(function(){
		ClearCustomDropdownControl($(this));
	});
};


$.fn.Form_BeforeSubmit = function() {
	$(this).find("input[type='text'], input[type='hidden'], select").each(function(){
		var $fld = $(this);
		if (""+$fld.val()=="") $fld.attr("disabled", true);
	});
	var hash = window.location.pathname+window.location.search;
	if (history.pushState) {
	    // IE10, Firefox, Chrome, etc.
	    window.history.pushState(null, null, hash);
	} else {
	    // IE9, IE8, etc
	    window.location.hash = hash;
	}
};


//Usage $.QueryString["param"]
(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))

	$.fn.CustomDropdownControl = function(options) {
		var settings = $.extend({
			onChange: function(){}
        }, options );

		var $container = $(this);
		var $value = $container.find('input[type="hidden"]');
		var $label = $container.find('[data-toggle=dropdown] > span').first();
		var $options = $container.find(".dropdown-menu li");

		$options.each(function(){
			var $option = $(this);
			var $a = $option.find("a[data-value]");

			$a.click(function(){
				var optVal = $a.data("value");
				var optText = $a.text();

				if (!$option.hasClass("active")) {
					$label.addClass("dropdown-placeholder");

					$options.removeClass("active");
					$option.addClass("active");

					$label.text(optText);
					if (!$a.hasClass("default")) $label.removeClass("dropdown-placeholder");
					$value.val(optVal);

					settings.onChange();
				}
			});
		});
	}

})(jQuery);


function GoToBlockDetails(obj){
	var btn = obj.find(".btn");
	window.location.href = btn.attr("href");
}


function GoToBlockPopup(obj){
	var btn = obj.find(".btn");
	btn.click();
}


function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}


function ScrollToAnchor(hash) {
	var $target = $(hash);
	$target = $target.length ? $target : $('a[name=' + hash.slice(1) + ']');

	if ($target.length) {
		var tmp = 100;
		if ($target.is('[data-offset]')) tmp = $target.data("offset");

		if ($(window).width()<991) tmp = 15;
		var container = $("html, body");
		var $scrollTop = ($("html").scrollTop()>0)?$("html").scrollTop():$("body").scrollTop();

		if($target.parents(".panel").length){
			var $a = $target.parents(".panel").find(".panel-heading .panel-title a[aria-expanded='false']");
			$a.trigger('click');			
		}

		$(".navbar-nav .dropdown.open").mouseleave();

		container.animate({
//			scrollTop: $target.offset().top - tmp	//- container.offset().top - $scrollTop
			scrollTop: $target.offset().top - container.offset().top + $scrollTop - tmp
		}, "slow", function(){
			$target.focus();

			if (""+$target.data("skip-hash")!="true") {
				if (history.pushState) {
				    // IE10, Firefox, Chrome, etc.
				    window.history.pushState(null, null, hash);
				} else {
				    // IE9, IE8, etc
				    window.location.hash = hash;
				}
			}
		});
	}
}

function InitCustomDropdownControl($select){
	var placeholder = "Select Here";
	var $placeholder = $select.find('option[data-placeholder]');

	if ($placeholder.length) {
		placeholder = $placeholder.data("placeholder");
		$placeholder.attr("data-text", $placeholder.text());
		if (!isTouchDevice()) $placeholder.text("");
		if ($select.prop('multiple')) $placeholder.remove();
	}

	$select.SumoSelect({
		//forceCustomRendering: true,
		placeholder: placeholder,
		floatWidth: 991, 
		csvDispCount: 3, 
		selectAll:true, 
		captionFormatAllSelected: "All items are selected" 
	});

	if ($placeholder.length) {
		$select.parent().find(".options li:first").html("<label>"+$placeholder.attr("data-text")+"</label>");
	}
}

function ClearCustomDropdownControl($select){
	$select.find("option:selected").prop("selected", false).change();
	$select[0].sumo.reload();

	var $placeholder = $select.find('option[data-placeholder]');
	if ($placeholder.length) {
		$select.parent().find(".options li:first").html("<label>"+$placeholder.attr("data-text")+"</label>");
	}
}

function ChangeCss(className, classValue) {
    var cssMainContainer = $('#css-modifier-container');

    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<style id="css-modifier-container"></style>');
        cssMainContainer.appendTo($('head'));
    }

    cssMainContainer.append(className + " {" + classValue + "}\n");
}
