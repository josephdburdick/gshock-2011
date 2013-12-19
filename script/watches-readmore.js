

	
$(window).load(function() {  
		
	//FOR THE FULLSCREEN BACKGROUND IMAGE
	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	
	function resizeBg() {
	
	if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
	    $bg
	        .removeClass()
	        .addClass('bgheight');
	} else {
	    $bg
	        .removeClass()
	        .addClass('bgwidth');
		}
	}
	    theWindow.resize(function() {
	            resizeBg();
	    }).trigger("resize");
	    
	//SIDE FILDER NAV
	$('.watches-nav ul li a').bind('mousedown',function(e) {
	    if(!$(this).hasClass('active')) {
	       	$(this).parent().parent().find('a').removeClass('active');
	    	$(this).addClass('active');
	    } 
	    else{
	    	 e.preventDefault();
	    }
	});
    
    //CREATE SCROLLBAR
    $('.tinyscroll').tinyscrollbar({scroll:true});
    $('img.checkered').wrap('<div class="checkeredborder">');
    
    if($('.watch-series-scroll li').size() > 7){
			$('.watch-series-scroll').hoverscroll({
				vertical: false,	// Display the list vertically or horizontally
				width:    878,		// Width of the list container
				height:   188,		// Height of the list container
				arrows:   false,		// Display direction indicator arrows or not
			    fixedArrows: true,  // Fixed arrows on the sides of the list (disables arrowsOpacity)
				debug:    false     // Debug output in the firebug console
			});
			
				$('.watch-series-scroll').children('li').fadeTo(300,1);
						//$(this).parent('ul').attr('id').addClass('center');
		} else {
			$('.watch-series-scroll').addClass('center').children('li').fadeTo(300,1);
		}
    
});




