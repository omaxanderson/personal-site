$(document).ready(function() {
  //$('.custom_container').css('margin-top', $(".menu").outerHeight());
  setContentHeight();
  $(window).resize(setContentHeight);
  //$('#main-header').css('padding-top', $('.jumbotron-img').outerHeight() / 3);
});

function setContentHeight() {
  var height = $(window).outerHeight() < $('.jumbotron-img').outerHeight() ?
    $(window).outerHeight() : $('.jumbotron-img').outerHeight();
  $('#header-img-container').css('height', height);

  $('#main-header').css('padding-top', $('.jumbotron-img').outerHeight() / 3);
}
