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
  $("#btn-explore").scrollTo($("#main"), 500);
  $(".btn-hover-title").showHoverTitle($("#hover-text"));
});
