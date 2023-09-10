(function ($) {
    "use strict";

    var wme_qa = {

        
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 150) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },

        /* ============================================================ */
        /* Jquery Plugins Calling
        /* ============================================================ */
        onePageFunction: function(){
            $('header .nav a[href*="#"]:not([href="#"]), .mobile-menu .nav a[href*="#"]:not([href="#"])').on('click', function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                          scrollTop: target.offset().top - 70,
                        }, 100);
                        return false;
                    }
                }
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);                
            }
            cloneMobileMenu("header .header-bottom .nav", ".mobile-menu .site-nav");

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
                var navLink = $('.mobile-menu .nav a');
                navLink.on("click", function() {
                    $(actionSelector).removeClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.toggle-menu, .close-menu', '.mobile-menu');  
            	
        },


        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {
            var speakersCarousel = new Swiper('.speakers .swiper', {
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                },
                loop: true,
                speed: 1000,
                navigation: {
                    nextEl: '.speakers .swiper .nav-next',
                    prevEl: '.speakers .swiper .nav-prev',
                },
                breakpoints: {   
                    400: {
                        slidesPerView: 2,                        
                        spaceBetween: 20,
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }
            }); 
            var workshopCarousel = new Swiper('.workshops-slider', {
                slidesPerView: 1,
                spaceBetween: 15,
                autoplay: {
                    delay: 5000,
                },
                loop: true,
                speed: 1000,
                breakpoints: {   
                    // when window width is >= 576px
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }
            }); 
        },

        funFacts: function() {
            // Fun Facts Counterup
            $('.counter .number').counterUp({
                delay: 10,
                time: 2000
            });
        },
        glightbox: function(){
            const lightbox = GLightbox({
                touchNavigation: true,
                loop: true,
                autoplayVideos: true
            });
        },
        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#home' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fal fa-chevron-up'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#home']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        initialize: function() {
			wme_qa.onePageFunction();
			wme_qa.mobile_menu();
			wme_qa.scroll_to_top();
			wme_qa.sticky_header();
			wme_qa.swiperCarousel();
			wme_qa.glightbox();
			wme_qa.funFacts();
		}
    };
    $(function() {
		wme_qa.initialize();
	});

})(jQuery);

/* ============================================================ */
/* PRELOADER
/* ============================================================ */
$(window).on('load', function() {
    $(".preloader").fadeOut();     
});
    