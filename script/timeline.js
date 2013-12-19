function transhover(){
	$('a.transhover').mouseover(function(){
		if(!$(this).hasClass('active')){
			$(this).stop().find('img').stop().fadeTo(250, 1);
		}
	});
	$('a.transhover').mouseout(function(){
		if(!$(this).hasClass('active')){
			$(this).stop().find('img').stop().fadeTo(250, .5);
		}		
	});
}
function setSlide(index) {
    $('#ul-timeline').cycle(index);
}
function cycles(){
	$('#ul-timeline').cycle({
    	timeout: 0,
    	speed: 500,
    	sync: true,
    	fx: 'fade',
    	fit: 0,
        slideResize: 0
    });
  
	$('#timeline-carousel').cycle({
    	next: "#btn-homecycle-next",
    	prev: "#btn-homecycle-prev",
    	after: function(){$(this).addClass('active')},
    	easing: 'easeOutExpo',
    	slideExpr: 'li',
    	timeout: 0,
    	speed: 1500,
    	fx: 'scrollHorz'
	});
  
	$('#timeline-carousel li a').click(function(){
		if(!$(this).hasClass('active')){
			
			$('#timeline-carousel li a').not(this).removeClass('active').children('img').fadeTo(200,.5);
			//$(this).parent().parent().find('a').removeClass('active').children('img').fadeTo(200,.5);
			$(this).addClass('active').children('img').fadeTo(200,1);
		}
		
	});
}

$(document).ready(function() {
	
	transhover();
	cycles();
  
});



