jQuery(document).ready(function ($) {

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