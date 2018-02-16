$(document).ready(function () {

    var span = $('#circle-1 span');
    var heading = $('.hero h1');

    var carouselElement = $('.screenshots');
    var mobileMaxWidth = 640;
    var carouselInitialized = false;


    var exploreFeaturesScroll = $('.identity-manager .explore');

    if (exploreFeaturesScroll.length) {
        exploreFeaturesScroll.click(function () {
            var offset = $('#first-feature').offset().top;
            $('html, body').stop().animate({ scrollTop: offset }, 600);
        });
    }

    function resizeHandler() {

        if (span.length && heading.length) {
            var headingWidth = heading.width();
            span.css('width', headingWidth + 'px');
        }

        if (carouselElement.length) {
            var windowWidth = $(window).outerWidth();

            if (windowWidth < mobileMaxWidth && !carouselInitialized) {
                carouselElement.slick({
                    centerMode: true,
                    slidesToShow: 3,
                    infinite: false,
                    arrows: false,
                    responsive: [
                        {
                          breakpoint: 600,
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

    $(window).on('resize', resizeHandler);
    $(window).trigger('resize');


    //Sidebar functionality
    var menuRight = $('#cbp-spmenu-s2');
    var openMenuButton = $('#open-menu');
    var closeMenuButton = $('#close-menu');
    var body = $('body');

    openMenuButton.add(closeMenuButton).click(toggleMenu);

    function toggleMenu() {
        body.toggleClass('cbp-spmenu-push-toleft');
        menuRight.toggleClass('cbp-spmenu-open');
    }
});