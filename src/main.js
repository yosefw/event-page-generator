(function ($) {
	$(document).ready(function(){

		// hide .navbar first
		$(".navbar").hide();

		// fade in .navbar
		$(function () {
			$(window).scroll(function () {

				 // set distance user needs to scroll before we start fadeIn
				if ($(this).scrollTop() > $('.jumbotron').outerHeight()) {
						$('.navbar').show();
				} else if ($(this).scrollTop() < $('.jumbotron').outerHeight()) {
						$('.navbar').hidden();
				}
			});
		});

});
	}(jQuery));
