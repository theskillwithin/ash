// Core scripts

$(document).ready(function() {
// nav
function nav() {
	if ($(window).width() < 788) {
      $('.mobile-nav-toggle').on('click', function() {
      	$('.left').css('display', 'block');
      	$('.left').css('top', '50%');
      });
      $('.mobile-nav-toggle').on('click', function() {
      	$('.left').css('top', '85px');
      });

      // click anywhere to cose
      $('html').click(function() {
          $('.left').css('top', '-400px');
      });
      $('.left').click(function(event) {
          event.stopPropagation();
      });
      $('.mobile-nav-toggle').click(function(event) {
          event.stopPropagation();
      });
        $('.left').on('touchstart', function(event) {
          event.stopPropagation();
      });
      $('.mobile-nav-toggle').on('touchstart', function(event) {
          event.stopPropagation();
      });
  } else {
  	$('.left').removeAttr( 'style' );
  }
}

    $(window).resize(nav());

});