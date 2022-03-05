$(document).ready(function() {

    //slider header
    (function() {
        $('.slide-image').each(function() {
            var bg = $(this).data('bg');
            var pos = $(this).data('flex-start');
            $(this).css({
                "background-image": "url(" + bg + ")",
                "transform-origin": pos,
            })
        });
        $('.flex-slider').flexslider({
            slideshow: true,
            slideshowSpeed: 5000,
            animationSpeed: 2000,
            controlNav: false,
            pauseOnAction: true,
            after: function(slider) {
                if (!slider.playing) {
                    slider.play();
                }
            }
        });
    })();

    //slider modulo6
    (function() {
        $(".logoslider").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplaySpeed: 1500,
            items: 5,
            responsive: {
                0: {
                    items: 3,
                },
                900: {
                    items: 4,
                },
                1100: {
                    items: 5,
                }
            }
        });
    })();


    //navbar animation
    (function() {
        $(window).scroll(function() {
            var currentScroll = $(this).scrollTop();
            if (currentScroll > 0) {
                $('nav').addClass("scrolled")
            } else {
                $('nav').removeClass("scrolled")
            }

        });
    })();


    //mobile menu styles
    (function() {
        $('.navbar-toggler').on('click', function() {
            if ($(this).attr('aria-expanded') === "false") {
                $(".navbar").addClass("opened");
            } else {
                $(".navbar").removeClass("opened");
            }
        })
    })();


    //nav set active on scroll   
    (function() {
        var navNodes = $(".nav-link");
        $('.mark-nav').viewportChecker({
            repeat: true,
            classToAdd: "active-nav",
            callbackFunction: function(elem, action) {
                var currentElement = $(elem)
                var currentElementId = currentElement[0].id;
                $('.nav-link').removeClass("active");
                for (var i = 0; i < navNodes.length; i++) {
                    if (navNodes[i].hash === "#" + currentElementId) {
                        $('[data-nav=' + currentElementId + ']').addClass("active");
                    }
                }
            }
        });
    })();

    //site animations    
    (function() {
        $('.check').viewportChecker({
            classToAdd: 'animate__animated',
            callbackFunction: function(elem, action) {
                var currentElement = $(elem)
                var animationType = currentElement.data('animation');
                currentElement.addClass(animationType);

            }
        });
    })();

});