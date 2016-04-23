/*
 * Use to initize Materilize functions 
 * By Bell Tower Design
 */
 
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider({full_width: true});
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .7 // Opacity of modal background
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space