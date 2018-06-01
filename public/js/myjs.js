$(document).ready(function() {
  var imageElement = document.getElementsByClassName('jumbotron-img')[0];

// OPTION 1 - Prevents the error, but there is now a visible content jump
/*
  if (imageElement.complete) {
	  setContentHeight();
  } else {
	imageElement.addEventListener('load', setContentHeight);	
  }
*/

// OPTION 2 - Bug exists but no content jump
  setContentHeight();

// OPTION 3 - Possible middle ground solution?
/*
$('#custom-container').css('display', 'none');
var poll = setInterval(function() {
	if (imageElement.naturalHeight) {
		clearInterval(poll);
		$('#custom-container').css('display', 'block');
		setContentHeight();
	}
}, 10);
*/


  $(window).resize(setContentHeight);

  // Project link hover handler
  $('.project-link').hover(projectLinkIn, projectLinkOut);
  //$('#main-header').css('padding-top', $('.jumbotron-img').outerHeight() / 3);

//  setOverlayHeight();
});

function projectLinkIn(event) {
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
