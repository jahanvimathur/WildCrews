(function ($) {
	
	"use strict";

	$('.owl-show-events').owlCarousel({
		items:4,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
        navText: [
            '<i class="bi bi-chevron-compact-left" aria-hidden="true"></i>',
            '<i class="bi bi-chevron-compact-right" aria-hidden="true"></i>'
        ],
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:4
			  }
		  }
	  })



})(window.jQuery);