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
	//Activate main slide with proper pager/carousel container.
	$('#ul-homecycle').after('<div id="homecycle-carousel-container"><a href="javascript:void(0);" id="btn-homecycle-prev" class="transhover"></a><a href="javascript:void(0);" id="btn-homecycle-next" class="transhover"></a><ul id="homecycle-carousel">').cycle({
    	timeout: 7000,
    	speed: 500,
    	sync: true,
    	fx: 'fade',
    	fit: 0,
    	startingSlide: 2,
    	activePagerClass:'active',
        slideResize: 0,
        pager:  '#homecycle-carousel',
        pagerAnchorBuilder: function(idx,slide){
       		return '<a href="javascript:setSlide('+ idx +')" class="transhover"><img src="../images/home/thumb_carousel' + idx + '.jpg" width="183" height="72" /></a>';
        },
        // Build pager that automagically hightlights updated pager thumb and also continue to next pager slide if the next thumb isn't visible
        updateActivePagerLink: function(pager, activeIndex) { 
        	$(pager).find('a').not(':eq('+activeIndex+')').removeClass('active').children('img').fadeTo(200,.5)
        	$(pager).find('a:eq('+activeIndex+')').addClass('active').children('img').fadeTo(200, 1); 
        	
        	//If next slide in carousel is hidden then go to next carousel slide
        	if ($(pager).find('a:eq('+activeIndex+')').parent('li').css('display') == "none"){
        		$('#homecycle-carousel').cycle('next');
        	}
    	}
    });
		//Before building the carousel wrap an Li around every 5 thumbs    
  		$('#homecycle-carousel > a').each(function(i) {
		   var a = $('#homecycle-carousel > a');
			for( var i = 0; i < a.length; i+=5 ) {
			    a.slice(i, i+5).wrapAll('<li></li>');
			}
		});
		//Now that we have Lis wrapped around every 5 thumbs, initiate new cycle	
		$('#homecycle-carousel').cycle({
	    	easing: 'easeOutSine',
	    	prev: '#btn-homecycle-prev',
	    	next: '#btn-homecycle-next',
	    	slideExpr: 'li',
	    	activePagerClass:'active',
	    	timeout:0,
	    	speed: 500,
	    	fx: 'scrollHorz'
		});
 		//Artifically activate new thumb 
 		$('#homecycle-carousel li a').click(function(){
		if(!$(this).hasClass('active')){
			$('#homecycle-carousel li a').not(this).removeClass('active').children('img').fadeTo(200,.5);
			$(this).addClass('active').children('img').fadeTo(200,1);
		}
		});
	
}

$(document).ready(function() {
	
	if ($('.ajaxthis').length > 0){
		var fromWhere = $('.ajaxthis').attr('id');
		$('#'+fromWhere).load('refresh/ajax/'+fromWhere+'.html',function(){
			var newHeight = $('#'+fromWhere).height();
			//alert(newHeight);
			$('#'+fromWhere).css('opacity','0').animate({opacity:'1'},200,function(){
				$('#'+fromWhere).css('background-image','');
				cycles();
			})
		});
	}

		$().piroBox_ext({
			piro_speed : 700,
			bg_alpha : 0.8,
			piro_scroll : true,
			piro_drag :false,
			piro_nav_pos: 'bottom'

		});

    transhover();

});



