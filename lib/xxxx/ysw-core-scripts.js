$(document).ready(function() {

    //search
    var searchInput = $('#search input');
    searchInput.addClass('hide');
    $('#search').click(function(event) {
        searchInput.removeClass('hide');
        event.stopPropagation();
        $('body').click(function() {
            searchInput.addClass('hide');
        });
    });

    //item page size select
    $('div.size div').click(function() {
        $('div.size div').removeClass('selected');
        $(this).addClass('selected');
        value = $(this).attr("data-value");
        $('#hidden-select select').val(value);
    });
    //item page  OWL
    var owl = $("#carousel");
    owl.owlCarousel({
        items: 3
    });

    $(".right-arrow").click(function() {
        owl.trigger('owl.next');
    });
    $(".left-arrow").click(function() {
        owl.trigger('owl.prev');
    });

    // nav
    var themenu = $('.left'),
        hamburger = $('.mobile-nav-toggle'),
        theWindow = $(window);

    function menuAction(status) {
        mheight = themenu.height() + 5;
        if (status === 'close') {
            themenu.removeClass('open');
            themenu.addClass('closed');
            themenu.css('top', -mheight);
            $('html').off('click', 'html');
        } else if (status === 'open') {
            themenu.removeClass('closed');
            themenu.addClass('open');
            themenu.css('top', '35px');
            $('html').on('click', function() {
                menuAction('close')
            });
        } else if (status === 'desktop') {
            themenu.removeClass('open');
            themenu.removeClass('closed');
            themenu.css('top', '0px');
            $('html').off('click', 'html');
        }
    }

    function stopProp(e) {
        e.stopPropagation();
    } // for click anywhere to close functionality
    themenu.on('click', stopProp);
    hamburger.on('click', stopProp);
    themenu.on('touchstart', stopProp);
    hamburger.on('touchstart', stopProp);

    function hamburgerClick() {
        if (themenu.hasClass('open')) {
            menuAction('close');
        } else {
            menuAction('open');
        }
    }

    function nav() {
        if (theWindow.width() < 788) {
            menuAction('close');
            hamburger.on('click', hamburgerClick);
            hamburger.on('tap', hamburgerClick);
        } else {
            menuAction('desktop');
        }
    }


    // navigation sub-categories
    function showTheCurrentSubCat() {
        var active = themenu.find('.active ul');
        if (theWindow.width() > 788) {
            active.css('display', 'block');
        } else {
            active.removeAttr('style');
        }
    }

    function mobileSubCatDownArrow() {
        if (theWindow.width() < 788) {
            $('.down').each(function(index) {
                var
                    that = $(this),
                    theLi = that.parents('li').find('ul'),
                    theSubUl = theLi.parents('li').children('ul');
                if (theLi.length < 1) that.remove();
                else that.on('click', function() {
                    theSubUl.toggle();
                });
            });
        }
    }

    nav();
    mobileSubCatDownArrow();
    showTheCurrentSubCat();
    theWindow.resize(nav);
    theWindow.resize(mobileSubCatDownArrow);
    theWindow.resize(showTheCurrentSubCat);
}), (jQuery);