// Core scripts

$(document).ready(function() {

//search
$('#search input').addClass('hide');
$('#search').click(function(event) {
    $('#search input').removeClass('hide');
    event.stopPropagation();
    $('body').click(function() {
        $('#search input').addClass('hide');
    });
});

//item page size select
$('div.size div').click(function(){
        $('div.size div').removeClass('selected');
        $(this).addClass('selected');
        value = $(this).attr("data-value");
        $('#hidden-select select').val(value);
        console.log('test');
});
//item page
var owl = $("#carousel");
owl.owlCarousel({
  items : 3
});

$(".right-arrow").click(function(){ owl.trigger('owl.next'); })
$(".left-arrow").click(function(){ owl.trigger('owl.prev'); })

// nav
function nav() {
	if ($(window).width() < 788) {
      $('.mobile-nav-toggle').on('click', function() {
        if ($('.left').hasClass('open')) {
          $('.left').removeClass('open');
          $('.left').addClass('closed');
        } else {
          $('.left').removeClass('closed');
          $('.left').addClass('open');
        }
      });

      // click anywhere to cose
      $('html').click(function() {
          $('.left').removeClass('open');
          $('.left').addClass('close');
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
  	$('.left').removeClass('open');
    $('.left').removeClass('closed');
  }
}
    $(window).resize(nav());
});