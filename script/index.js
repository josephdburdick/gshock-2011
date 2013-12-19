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
    $('#ul-homecycle').cycle(index);
}
function setThumb(index) {
    $('#homecycle-carousel').cycle(index);
}
function cycles(){

	$('#ul-homecycle').cycle({
    	timeout: 9000,
    	speed: 500,
    	sync: true,
    	fx: 'fade',
    	fit: 0,
    	slideExpr:'li',
    	before: function(curr, next, opts){
    		$('#ul-homecycle li').not(this).removeClass('active');
    		$(this).addClass('active');//.siblings().removeClass('active');
    		var whichIndex = $('#ul-homecycle li.active').index('#ul-homecycle li');
			var whichSlide = $('#homecycle-carousel a').eq(whichIndex).parent('li').index('#homecycle-carousel li');

			$('#homecycle-carousel a').eq(whichIndex).trigger('click');
			
			//COMMENT THIS IF STATEMENT IF YOU DON'T WANT THE CAROUSEL TO AUTO SCROLL*/
			/*if ($('#homecycle-carousel > li').eq(whichSlide).css('display') == "none"){
				$('#homecycle-carousel').cycle(whichSlide);
			}*/
		},
        slideResize: 0
    });
  
	$('#homecycle-carousel').cycle({
    	next: "#btn-homecycle-next",
    	prev: "#btn-homecycle-prev",
    	easing: 'easeOutSine',
    	slideExpr: 'li',
    	timeout: 0,
    	speed: 1500,
    	fx: 'scrollHorz'
	});
  
	$('#homecycle-carousel a').click(function(){
		if(!$(this).hasClass('active')){
			
			$('#homecycle-carousel li a').not(this).removeClass('active').children('img').fadeTo(200,.5);
			//$(this).parent().parent().find('a').removeClass('active').children('img').fadeTo(200,.5);
			$(this).addClass('active').children('img').fadeTo(200,1);
			
		}
		
	});
}

$(document).ready(function() {
	

	// AJAX the slideshow in to improve initial page load!
	if ($('.ajaxthis').length > 0){
		var fromWhere = $('.ajaxthis').attr('id');
		$('#'+fromWhere).load('refresh/ajax/'+fromWhere+'.html',function(){
			$('#'+fromWhere).css('opacity','0').animate({opacity:'1'},200,function(){
				
				$('#'+fromWhere).css('background-image','');
				$('#homecycle-carousel').waitForImages({
					//finished: function(){alert('derp')},
					each: function(){$('#homecycle-carousel a').css('background-image','none')},
					waitForAll: false
				});
				
				cycles();
				transhover();
				
			});
			
			
		});
	}

	

		$().piroBox_ext({
		piro_speed : 700,
			bg_alpha : 0.5,
			piro_scroll : true // pirobox always positioned at the center of the page
		});
  
});


