/** Javascript File
* @author: arjunatlast
* @file: functions.js
**/

/**
* Scroll to an element on click
* @param {Object} element
* @param {Number} speed
**/
$.fn.scrollTo = function(element, speed) {
  $(this).click(function(){
    $('html, body').animate({
      scrollTop: element.offset().top
    }, speed);
  });
}

/**
* Shows hover-title data on an element specified
* @param {Object} element
**/
$.fn.showHoverTitle = function(element) {
  $(this).hover(function(){
    element.text($(this).attr('data-hover-title'));
    element.addClass('visible');
  }, function(){
    element.removeClass('visible');
  });
}
