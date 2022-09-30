/*---------------------------------------------


----------------------------------------------*/

(function ($) {
    "use strict";
    const $window = $(window);

    $window.on('load', function () {

        const $dom = $('html, body');
        const preLoader = $('#loading-area');


        /*========= Preloader =========*/
        $(preLoader).delay('100').fadeOut(1500);

        /*========= Scroll to top button =========*/
        var scrollToTopBtn = $('#scroll-top');

        $window.on('scroll', function () {
            // scroll to top button
            if ($window.scrollTop() > 300) {
                scrollToTopBtn.addClass('active');
            } else {
                scrollToTopBtn.removeClass('active');
            }
        });

        scrollToTopBtn.on('click', function (e) {
            e.preventDefault();
            $($dom).animate({ scrollTop: 0 }, '300');
        });






    });


})(jQuery);



/*===============nav bar==============*/






