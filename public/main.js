(function ($) {
	$(document).ready(function(){

		var heroHeight = $('.jumbotron').outerHeight();

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
