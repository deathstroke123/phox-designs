/** Javascript File
* @author: arjunatlast
* @file: functions.js
**/

/**
* Scroll to an element on click
* @param {Object} $element
* @param {Number} speed
**/
$.fn.scrollTo = function($element, speed) {
  $(this).click(function(){
    $('html, body').animate({
      scrollTop: $element.offset().top
    }, speed);
  });
};

/**
* Shows hover-title data of the element on an element specified
* @param {Object} $element
**/
$.fn.showHoverTitle = function($element) {
  $(this).hover(function(){
    $element.text($(this).attr('data-hover-title'));
    $element.removeClass('hidden');
  }, function(){
    $element.addClass('hidden');
  });
};

/**
* Adds an open button to elements (Button click will make the element visible)
* @param {Object} $element
* @return {Object}
**/
$.fn.addOpenButton = function($element) {
  var $self = $(this);
  $element.click(function() {
    $self.removeClass('hidden');
  });
  return $(this);
};

/**
* Adds a close button to elements (Button click will make the element hidden)
* @param {Object} $element
* @return {Object}
**/
$.fn.addCloseButton= function($element) {
  var $self = $(this);
  $element.click(function() {
    $self.addClass('hidden');
  });
  return $(this);
};

/**
* Add an action button to elements
* @param {Object} $element
* @param {function} action
* @return {Object}
**/
$.fn.addActionButton = function($element, action) {
  var self = this;
  $element.click(function(event) {
    action(self, event, this);
  });
  return $(this);
}
