$(document).ready(function() {
  //$('.custom_container').css('margin-top', $(".menu").outerHeight());
  setContentHeight();
  $(window).resize(setContentHeight);

  // Project link hover handler
  $('.project-link').hover(projectLinkIn, projectLinkOut);
  //$('#main-header').css('padding-top', $('.jumbotron-img').outerHeight() / 3);

//  setOverlayHeight();
});

function projectLinkIn(event) {
  console.log('tester');
  $(this).removeClass('text-dark');
  $(this).addClass('bg-secondary');
}
function projectLinkOut(event) {
  $(this).removeClass('bg-secondary');
  $(this).addClass('text-dark');
}

function setContentHeight() {
  // first move custom-container down for navbar
  $("#custom-container").css('margin-top', $('.navbar').outerHeight());

  // set the size of the header container to be equal to either the size of the image
  // or the size of the viewport
  var height = $(window).outerHeight() < $('.jumbotron-img').innerHeight() ?
    $(window).outerHeight() : $('.jumbotron-img').innerHeight();
  $('#header-img-container').css('height', height);

  // position the header a third of the way down the image
  // due to absolute positioning, we need to add the height of the navbar to the padding
  $('#main-header').css('padding-top', $('.jumbotron-img').outerHeight() / 3 + $('.navbar').outerHeight());

  // set overlay width and padding
  $('.overlay').css('width', $('.gallery-img > img').width() + "px");
  $('.overlay').css('margin-left', $('.gallery-img').css('padding-left'));

}

/*
function setOverlayHeight() {
	var galleryElements = $('.gallery-img');
	for (var i = 0; i < galleryElements.length; i++) {
		galleryElements[i].css('height', $(galleryElements[i]).find('img')[0].outerHeight());
	}
}
*/
