/*--------------------------------------------------------------
 HEADER STYLING ON SCROLL
--------------------------------------------------------------*/
var a = jQuery("header").offset().top;

function scrollListener(){
  if(jQuery(document).scrollTop() > a) {   
    jQuery('header').addClass("fixed-menu");
  } else {
    jQuery('header').removeClass("fixed-menu");
  }
};

jQuery(document).scroll(scrollListener);
scrollListener();

/*--------------------------------------------------------------
 MOBILE MAIN MENU
--------------------------------------------------------------*/
//Prevent Page Scroll when Mobile Nav is Open
jQuery('.menu-toggle').click(function () {
  if (jQuery('#site-navigation').hasClass('toggled')) {
    jQuery('body').addClass("overflow-hidden");
  } else {
    jQuery('body').removeClass("overflow-hidden");
  }
});