// HAMBURGER MENU EFFECTS

$( ".cross" ).hide();
$( ".menu" ).hide();

$( ".hamburger" ).click(function() {
	$( ".menu" ).fadeIn( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	});
});

$( ".cross" ).click(function() {
	$( ".menu" ).fadeOut( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});
});

// SCROLLING EFFECT WHEN NAV LINKS ARE CLICKED

$(".menu-links").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
    $(".menu").hide();
    $(".cross").hide();
    $(".hamburger").show();
});

// FIXED HAMBURGER MENU ON SCROLL

$(window).scroll(function() {
	var header = $("header"),
		scroll = $(window).scrollTop();

	if (scroll >= 100) header.css('position', 'fixed')
	else sticky.removeClass('fixed');

});






