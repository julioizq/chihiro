 jQuery(function(){
  var menuOffset = jQuery('#menu-grande')[0].offsetTop;
  jQuery(document).bind('ready scroll',function() {
    var docScroll = jQuery(document).scrollTop();
    if(docScroll >= menuOffset) {
      jQuery('#menu-grande').addClass('fixed').css('width',jQuery('#masthead').width());
    } else {
      jQuery('#menu-grande').removeClass('fixed').removeAttr("width");
    }
   });
});