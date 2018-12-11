$(document).ready(function () {

    var span = $('#circle-1 span');
    var heading = $('.hero h1');

    var carouselElement = $('.screenshots');
    var mobileMaxWidth = 639;
    var tabletMaxWidth = 1023;

    var carouselInitialized = false;

    var appsFilter = $('.filter');

    var exploreFeaturesScroll = $('.identity-manager .explore');

    function resizeHandler() {

        if (span.length && heading.length) {
            var headingWidth = heading.width();
            span.css('width', headingWidth + 'px');
        }

        //Carousel initialization logic
        if (carouselElement.length) {
            var windowWidth = window.innerWidth;

            var breakpoint = carouselElement.find('img').length>3 ? 600 : mobileMaxWidth;
            if (windowWidth <= mobileMaxWidth && !carouselInitialized) {
                carouselElement.slick({
                    centerMode: true,
                    slidesToShow: 3,
                    infinite: false,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: breakpoint,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });

                carouselInitialized = true;

            } else if (windowWidth >= mobileMaxWidth && carouselInitialized) {
                carouselInitialized = false;
                carouselElement.slick('unslick');
            }
        }
    }

    function toggleMenu() {
        body.toggleClass('cbp-spmenu-push-toleft');
        menuRight.toggleClass('cbp-spmenu-open');
    }

    $(window).on('resize', resizeHandler);
    $(window).trigger('resize');


    //The home screen arrow-scroll
    if (exploreFeaturesScroll.length) {
        exploreFeaturesScroll.click(function () {
            var offset = $('#first-feature').offset().top;
            $('html, body').stop().animate({ scrollTop: offset }, 600);
        });
    }

    //Sidebar
    var menuRight = $('#cbp-spmenu-s2');
    var openMenuButton = $('#open-menu');
    var closeMenuButton = $('#close-menu');
    var body = $('body');

    openMenuButton.add(closeMenuButton).click(toggleMenu);


    //Apps filter
    if (appsFilter.length) {
        setClearfixes($('.cards .card-col'), $('.cards .card-col:visible'));

        appsFilter.click(function (e) {
            e.stopPropagation();
            appsFilter.toggleClass('active');
        });

        $(document).click(function (e) {
            var target = e.target;
            if (!$(target).is(appsFilter) && appsFilter.hasClass('active')) {
                appsFilter.toggleClass('active');
            }
        });

        var options = $.map(appsFilter.find('ul li'), function (n, i) {
            return $(n).text();
        });

        var selectedOption = appsFilter.find('.current');

        appsFilter.on('click', 'li', function () {

            var option = $(this).text();
            $('.cards .card-col').show();


            $.each(options, function (i, v) {
                if (v === option) {
                    selectedOption.text(option);
                    if (option.toLowerCase() !== 'all') {
                        applyFilter(option);
                    }
                    return false;
                }
            });
            setClearfixes($('.cards .card-col'), $('.cards .card-col:visible'));
        });

        function applyFilter(tagName) {
            var cards = $('.cards .card-col .card');
            $('.cards .card-col').hide();

            $.each(cards, function (i, card) {
                var allTags = $(card).find('.tag');

                $.each(allTags, function (tagIndex, tagElement) {

                    if ($(tagElement).text().toLowerCase() === tagName.toLowerCase()) {
                        $(card).parent().show();
                        return false;
                    }
                });

            });
        }

        function setClearfixes(allCardCols, visibleCardCols) {

            if (allCardCols.length == visibleCardCols.length) {
                setClearfixForCards(allCardCols);
            } else {
                setClearfixForCards(visibleCardCols);
            }
        }

        function setClearfixForCards(cards) {
            cards.removeClass('clearfix-md');
            cards.removeClass('clearfix-lg');

            $.each(cards, function (i, card) {
                if (i % 2 === 0) {
                    $(card).addClass('clearfix-md');
                }
                if (i % 3 === 0) {
                    $(card).addClass('clearfix-lg');
                }
            });
        }
    }
});
