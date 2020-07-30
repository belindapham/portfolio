"use strict";
var $ = jQuery;
function initMidnight(refreshMidnight) {
	var $defaultClass = $('#siteHeader').data('midnight-default');
	if($defaultClass == '') {
		$defaultClass = 'default';
	}
	$('#siteHeader').midnight({
		defaultClass: $defaultClass
	});

	if(($(window).outerWidth() > 1025) && $('#siteFooter').hasClass('vase_sticky')) {
		$('#siteFooter').midnight({
			defaultClass: $defaultClass
		});
	}
	if($('#siteHeader').hasClass('headerTop') && $('nav.navbar').hasClass('vase_navbar-right')) {
		$('.midnightInner').css('min-height', '100vh');
		$(window).trigger('resize');
	}
}
