(function( $ ) {
	$.fn.tableOfContents = function(tocList) {
		var $container = jQuery(this);
    	var prevH2Item = null;                                                             
	    var olWrap = jQuery(tocList);                                                             
		var prevHeader = "";

	    jQuery(tocList).empty();                                                            
    
	    var index = 0;                                                                     
    	$container.find("h2").each(function() {                                                      
			var $header = jQuery(this);
	        var anchor = '<a class="anchor-link" data-skip-hash="true" name="header' + index + '"></a>';
    	    $header.append(anchor);                                                        


	        var li = "<li><a href='#header" + index + "'>" + $header.text().trim() + "</a></li>";   
			var liHeader = $header.prop("tagName").toLowerCase();
			if (prevHeader=="") prevHeader = liHeader;
      
			if(liHeader>prevHeader){                                                        
    	        newOlWrap = jQuery("<ol></ol>");                                               
				olWrap.find("li").last().append(newOlWrap);
				olWrap = newOlWrap;
	        } else if(liHeader<prevHeader){                                                        
				newOlWrap = olWrap.parents("ol")
				olWrap = newOlWrap;
			}

			olWrap.append(li);
			prevHeader = liHeader;
	        index++;                                                                       
	    });                                                                                
	}
})(jQuery);