// Typed Animated
var typed = new Typed('.animated-typed', {
    strings: ["Hello All...", "I am a Full Stack Web Designer.", " Lets go to My Portfolio !"],
    typeSpeed: 80,
    backSpeed: 20,
    smartBackspace: true, // this is a default
    loop: true
});

// Hide Typed Cursor 
$(".typed-cursor").css("opacity", "0");






$(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();

    // Portfolio 
    if (wScroll > $('#portfolio').offset().top - 200 ){
        $('.portfolioItem').each( function(i){
            setTimeout(function() {
                $(".portfolioItem").eq(i).addClass('portfolioItemShow')
            }, 300 * (i  + 1) )
        })
    }
    
    // Border Scroll
    if ($(this).scrollTop() > 100) {
        $(".navbar").css("borderBottom", "1px solid white")
    } else {
        $(".navbar").css("borderBottom", "none")
    }

    if ($(this).scrollTop() > 600) {
        $(".navbar").css("opacity", ".9")
    } else {
        $(".navbar").css("opacity", "1")
    }


});


// Navbar Smooth
$('.page-scroll').on('click', function (e) {

    // ambil href
    var tujuan = $(this).attr('href');

    var elementTujuan = $(tujuan);

    $('html ,body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1000)

    e.preventDefault();

});

