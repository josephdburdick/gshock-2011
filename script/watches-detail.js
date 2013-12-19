$(document).ready(function(){
	//HOTSPOT ANIMATION
	$(".hotspot").animate({opacity: 0.65}, 5, 'easeInOutCubic');
	$('.hotspot').hover(function(){
		$(this).stop().animate({opacity:1},300,'easeInOutCubic');
	},function(){
		$(this).stop().animate({opacity:.65},600,'easeInOutCubic');
	});
	
	//HOTSPOT ACTIVATE
	$('.hotspot').live('mouseover', function() {
	   $(this).qtip({
		  content: $(this).html(),
		  style: 'ui-tooltip-dark ui-tooltip-rounded',
		    position: {
		        my: 'top center',
		        target: $(this), //'mouse',
		        //viewport: $('#MainDetail-BigSlide-xl'), // Keep it on-screen at all times if possible
		        adjust: {
		            x: -17,  y: 3
		        }
		    },
	
	      overwrite: false, // Make sure another tooltip can't override this one without it being explicitly destroyed
	      show: { ready: true } // Required so the tooltip shows on first mouseover
	   })
	});
	
	//Hoverscroll on Watches-detail
	if($('.watches-detail-variations') && $('.watches-detail-variations ul').length > 0){
		if($('.watches-detail-variations ul li').length>4){
			$('.watches-detail-variations ul').children('li').css('marginRight','20px').end().hoverscroll({
				vertical: false,	// Display the list vertically or horizontally
				width:    368,		// Width of the list container
				height:   101,		// Height of the list container
				arrows:   false,		// Display direction indicator arrows or not
			    fixedArrows: false,  // Fixed arrows on the sides of the list (disables arrowsOpacity)
				debug:    false     // Debug output in the firebug console
			});
		}
	}
});

	
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
	    
	if ($('.watches-detail-cycle li').length > 1){
	//Build Cycle
		$('.watches-detail-cycle').before('<ul class="watches-detail-pager">').cycle({
	    	timeout: 0,
	    	speed: 500,
	    	sync: true,
	    	fx: 'fade',
	    	fit: 0,
	        slideResize: 1,
	        activePagerClass: 'active',
		    cleartype: true, 
		    cleartypeNoBg: true,
		    timeout: 5000, 
		    pager:  '.watches-detail-pager', 
		     
		    // callback fn that creates a thumbnail to use as pager anchor 
		    pagerAnchorBuilder: function(idx, slide) {
			var src = $('img',slide).attr('src').replace('xl','thumb');	   
	        	return '<li><a href="#"><img src="' + src + '" /></a></li>'; 
		    } 
	    });
	}
    
    //CREATE SCROLLBAR
    $('.tinyscroll').tinyscrollbar({scroll:true});
});




