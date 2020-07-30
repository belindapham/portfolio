"use strict";
var $ = jQuery;

function vase_animatePageHeader() {
	$('body').addClass('oHidden');
	$(window).scrollTop(0);  
	$('body').mousewheel(function(event, delta) {
		animateHeader(delta);
		if($('body').hasClass('oHidden')) {
			return false;
		}
	});
	
    var delta = 0;
	$('html').keydown(function(e) {
		
        if (e.which == 40) {
			delta = -1;
		}
		if (e.which == 38) {
			delta = 1;
		}
		
		animateHeader(delta);
		if($('body').hasClass('oHidden')) {
			setTimeout(function(){
				$(window).scrollTop(0);
			}, 300);
		}
	});
}

function animateHeader(delta) {
	if (($(window).scrollTop() < 955 ) && (delta == -1) && $('body').hasClass('oHidden')) {
		$('.pageHeader.scroll').removeClass('slideDown').addClass('slideUp');
		setTimeout(function(){
			$('body').removeClass('oHidden');
		}, 1000);
	}
	else if (($(window).scrollTop() <= 0) && (delta == 1)) {
		$('body').addClass('oHidden');
        $('.pageHeader.scroll').removeClass('slideUp').addClass('slideDown');
	}
}