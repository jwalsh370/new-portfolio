jQuery.noConflict();

jQuery( document ).ready(function( $ ) {
	
	//noscript
	$('body').removeClass('noscript');
	
	//min-height
	$('#main').addClass('min_height');

    // IE 10 and beyond : http://css-tricks.com/ie-10-specific-styles/
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

}); //closed jquery