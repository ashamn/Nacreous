$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});

jQuery(function($){
  "use strict";
	$.supersized({
	slide_interval          :   2600,		// Length between transitions
	transition              :   2, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	700,		// Speed of transition
	slide_links			:	'num',		// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides 			:  	[					// Slideshow Images
							{image : 'indexassets/img/1.jpg'},
							{image : 'indexassets/img/2.jpg'},
							{image : 'indexassets/img/3.jpg'}
						]
	});
});

$(document).ready(function() {
	$(".firstslide").owlCarousel({
	      navigation : true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
		  autoPlay: 5200,
	      singleItem:true,
          navigationText: [
            "<i class='fa fa-chevron-left flscroll'></i>",
            "<i class='fa fa-chevron-right frscroll'></i>"
            ]
	  });
});

//	06 - 04 - Owlslider Pricing-Table
$(document).ready(function() {
	$("#owl-pricing-table2").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: false,
		singleItem:false,
		transitionStyle : "backSlide",
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,2],
		  itemsMobile :  [620,1]
     });
});