
$(document).ready(function(){
	if($('#photo-slideshow').length > 0){
	$('#photo-slideshow').after('<h5 class="photosandvideo">Photos & Video</h5><div id="photo-nav-container"><ul id="photo-nav">').cycle({ 
	    timeout: 0,
    	speed: 500,
    	sync: true,
    	fx: 'fade',
    	fit: 0,
        slideResize: 1,
        slideExpr: 'li',
        activePagerClass: 'active',
	    cleartype: true, 
	    cleartypeNoBg: true,
	    pager:  '#photo-nav', 
	     
	    // callback fn that creates a thumbnail to use as pager anchor 
	    pagerAnchorBuilder: function(idx, slide) {
		var src = $('img',slide).attr('src').replace('xl','thumb');	   
        	return '<li><a href="#"><img src="' + src + '" width="70" height="36"></a></li>'; 
	    } 
 	 });
 	}
});
	


$(window).load(function(){
	

 	 
 	 	if($('#photo-nav li').size() > 4){
 	 		
			$('#photo-nav').hoverscroll({
				vertical: false,	// Display the list vertically or horizontally
				width:    360,		// Width of the list container
				height:   60,		// Height of the list container
				arrows:   false,		// Display direction indicator arrows or not
			    fixedArrows: true,  // Fixed arrows on the sides of the list (disables arrowsOpacity)
				debug:    false     // Debug output in the firebug console
			});
	
				$('#photo-nav').children('li').fadeTo(300,1);
		} else {
			$('#photo-nav').addClass('center').children('li').fadeTo(300,1);
		}
 	 
 	 
 	 //$('.video').append('<div class="btn-play"></div>');
 	 
 	 
 	 
});

