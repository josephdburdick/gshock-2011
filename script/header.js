//THAT SEARCH BOX
function search(){

    var input = $('input#s');
    var divInput = $('div.input');
    var width = divInput.width();
    var outerWidth = 240-28; //divInput.parent().width() - (divInput.outerWidth() - width) - 28;
    var submit = $('#searchSubmit');
    var txt = input.val();
    
    input.bind('focus', function() {
        if(input.val() === txt) {
            input.val('');
        }
        $(this).animate({color: '#333'}, 300); // text color
        $(this).parent().animate({
            backgroundColor: '#cccccc'//, // background color
        }, 300, function() {
            if(!(input.val() === '' || input.val() === txt)) {
                if(!($.browser.msie && $.browser.version < 9)) {
                    submit.fadeTo(300,1);
                } else {
                    submit.css({display: 'block'});
                }
            }
        }).addClass('focus');
    }).bind('blur', function() {
    	
        $(this).animate({color: '#ccc'}, 300); // text color
        $(this).parent().animate({
            backgroundColor: '#252525'//, // background color
        }, 300, function() {
            if(input.val() === '') {
                input.val(txt)
            }
        }).removeClass('focus');
        if(!($.browser.msie && $.browser.version < 9)) {
            submit.fadeTo(300,.25);
        } else {
            submit.css({display: 'none'});
        }
    }).keyup(function() {
        if(input.val() === '') {
            if(!($.browser.msie && $.browser.version < 9)) {
                submit.fadeTo(300,.25);
            } else {
                submit.css({display: 'none'});
            }
        } else {
            if(!($.browser.msie && $.browser.version < 9)) {
                submit.fadeTo(300,1);
            } else {
                submit.css({display: 'block'});
            }
        }
    });
}
// PRIMARY NAVIGATION DROPDOWN
function dropdown(){
	//IF PRIMARY NAV HAS ACTIVE CLASS THEN SHOW ASSOCIATED DROPDOWN
	if ($('ul#nav-primary li a.nav-dd').hasClass('active')){
		$(this).trigger('click');
	}
	//IF PRIMARY NAV HAS A SUBMENU WITH AN ACTIVE CLASS THEN SHOW THAT
	if ($('ul.dd li a').hasClass('active')){
		var thismenu = $('ul.dd a.active').parent().parent().attr('id');
		$('#'+thismenu).fadeIn(300);
		var mnuactive = $('#'+thismenu).attr('id').replace('dropdown','primary');
		$('#'+mnuactive).addClass('active');
	}
	//CLICK TO SHOW DROPDOWN
	if(!$('html').hasClass('ie8')){
		$('ul#nav-primary li a.nav-dd').click(function(e){
			if (!$(this).hasClass('active')){
				$('ul#nav-primary li a').removeClass('active');
				var dd = "#"+$(this).addClass('active').attr('id').replace('primary', 'dropdown');
				$('nav ul.dd').fadeTo(100,0,function(){$(this).hide();});
				$(dd).fadeTo(100,1,function(){$(this).show();});
			}
			else {
		    	e.preventDefault();
			}
		});
	} else {
		$('ul#nav-primary li a.nav-dd').click(function(e){
			if (!$(this).hasClass('active')){
				$('ul#nav-primary li a.nav-dd').removeClass('active');
				var dd = "#"+$(this).addClass('active').attr('id').replace('primary', 'dropdown');
				$('nav ul.dd').hide();
				$(dd).show();
			}
			else {
		    	e.preventDefault();
			}
		});
	}
	
}

$(document).ready(function() {
	search();
	dropdown();
});
