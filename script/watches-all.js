

	
$(document).ready(function() {  
		
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
	    
	
	//WATCHES FILTER NAV 
	$('.watches-nav ul li a').bind('mousedown',function(e) {
	    if(!$(this).hasClass('active')){
	       	$(this).parent().parent().find('a').removeClass('active');
	    	$(this).addClass('active');
	    	
	    	if($(this).parent().parent().hasClass('filter')){ //ONLY FILTER ul.filter containers
		    	var filterVal = $(this).text().toLowerCase().replace(' ','-');
			    if(filterVal == 'all') {
					$('div.watches-series-list ul li.hid').animate({marginLeft:'0px',opacity:'1'}, 600,'easeInOutQuint').fadeIn(600).removeClass('hid');
				} else {
					$('div.watches-series-list ul li').each(function() {
						
						if(!$(this).hasClass(filterVal)) {
							$(this).animate({marginLeft:"-125px",opacity:'0'}, 600,'easeInOutQuint').fadeOut(600).addClass('hid');
							//$(this).parent().css(width, myWidth);
	
						} else {
							$(this).animate({marginLeft:'0px',opacity:'1'}, 600,'easeInOutQuint').fadeIn(600).removeClass('hid');
							//$(this).parent().css(width, myWidth*myTotal);
						}
						
					});//END OF EACH FUNCTION
					
				}
			}//END IF .FILTER
			//CHANGE WIDTH OF SCROLLABLE WIDTH TO PREVENT OVERFLOW
			$('div.watches-series-list ul').each(function() {
				var myWidth = $(this).children('li').not('.hid').length
				$(this).css('width', (myWidth*125));
			});//END OF EACH FUNCTION
		} else{
			e.preventDefault();
		}
	});
	
	
	
});//END of DOCUMENT READY


$(window).load(function(){
			$('#series-list-aviation,#series-list-mastersg,#series-list-limited,#series-list-classic').hoverscroll({
				vertical: false,	// Display the list vertically or horizontally
				width:    878,		// Width of the list container
				height:   188,		// Height of the list container
				arrows:   false,		// Display direction indicator arrows or not
			    fixedArrows: true,  // Fixed arrows on the sides of the list (disables arrowsOpacity)
				debug:    false     // Debug output in the firebug console
			});
		});


