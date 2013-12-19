//THAT SEARCH BOX
function search(){

    var input = $('input#re-s');
    var divInput = $('div.re-input');
    var width = divInput.width();
    var outerWidth = 240-28; //divInput.parent().width() - (divInput.outerWidth() - width) - 28;
    var submit = $('#researchSubmit');
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

$(document).ready(function() {
	search();
});
