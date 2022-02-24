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
            animationSpeed: 1000,
            controlNav: false,
            pauseOnAction: true,
            after: function(slider) {
                if (!slider.playing) {
                    slider.play();
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