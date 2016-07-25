(function ($) {
	$(document).ready(function(){

		var heroHeight = $('.jumbotron').outerHeight();

		// hide .navbar first
		$('.navbar').hide();

		// fade in .navbar
		$(function () {
			$(window).scroll(function () {

				var scrollPos= $(this).scrollTop();

				if (scrollPos > heroHeight) {
					$('.navbar').show();
				};
				if (scrollPos <= heroHeight) {
					$('.navbar').hide();
				}
			});
		});

	});
}(jQuery));
