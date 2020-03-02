$(document).ready(function(){


    $( ".icon" ).mouseenter(function() {
      $(this).next('.dropdown').slideToggle(250);
    });

    $( ".icon" ).mouseleave(function() {
      $(this).next('.dropdown').slideToggle(250);
    });

});
