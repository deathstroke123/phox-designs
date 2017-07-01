/****************************
******* Javascript File *****
*****************************
** @author : arjunatlast
** @file : script.js
*****************************/

//onwindow load
$(window).on('load', function(){
    $(".preloader").remove();
});

$(document).ready(function(){
  $("#btn-explore").scrollTo($("#main"), 1000);
  $(".btn-hover-title").showHoverTitle($("#hover-text"));
  //navMenu
  $("#navMenu").addOpenButton($('#btn-menu'));
  $("#navMenu").addCloseButton($('#btn-menu-close'));
});
