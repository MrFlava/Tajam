jQuery(document).ready(function ($) {

	$(window).scroll(function () {

        if ($(this).scrollTop() > 600) {

            $('.scrollup').fadeIn('slow');

        } else {

            $('.scrollup').fadeOut('slow');
        }
    });

    $('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    var wow = new WOW({
        mobile: false 
    });
    wow.init();


    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {

        $("html, body").animate({scrollTop: 0}, 1000);

        return false;
    });


    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

});
$(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});