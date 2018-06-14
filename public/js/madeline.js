// object to hold "passwords" and hints
var passwords = new Array();
passwords.push([ "The most majestic pup of all time.", "bode" ]);
passwords.push(["The prettiest pup of all time.", "lucy" ]);
passwords.push(["The most sausage-like pup of all time.", "mongo" ]);
passwords.push(["Your freshman year dorm.", "emerson" ]);
passwords.push(["Max's freshman year dorm (how's your memory??).", "mckee" ]);
passwords.push([ "The best NHL hockey team.", "wild"]);

var phrases = [
	"Good morning bae, have a wonderful day! Do something productive today :)",
	"Hello Mad, I love you a lot and I can't wait to see your face!",
	"Bae! Hi! I miss you so much and I wish we could be hanging out right now.",
	"Hola senorita, how you doing? I hope you have an incredible day and I'd love to hear about it tonight.",
	"Do something outside in nature today, whether it's going for a walk, or helping your mom with her garden, just take some time to destress away from technology for a bit. Love you mad :)",
	"How's that job search coming? Good? Try to apply to three different places today! Ugh I know it's getting so tedious but you got this.",
	"Hi bae I love you a latte. Remember our trip to France? That was so nice, I love looking back on those Amsterdam trips."
];

var randomNum = Math.floor(Math.random() * passwords.length);

$(document).ready(function() {
	$('#entryFormSection').css('height', $(window).innerHeight() - $('.navbar').outerHeight());
	$('#passHint').html("<p>" + passwords[randomNum][0] + "</p>");
	$('#passwordField').keyup(checkEmpty);
	loadContent();
});

function loadContent() {
	$('#daily-phrase').html("<p>" + phrases[Math.floor(Math.random() * phrases.length)]);
}

function submitPassword(event) {
	// stop default action
	event.preventDefault();

	if ($('#passwordField').val().toLowerCase() == passwords[randomNum][1]) {
		// fade that field and fade in the rest of it
		$('#entryFormSection').fadeOut(1500, function() {
			$('#entryFormSection').remove();

			// fade in that other shit
			$('#mainContentSection').addClass('d-flex justify-content-center pt-5');
			$('#mainContentSection').css('height', $(window).innerHeight() - $('.navbar').outerHeight());
			$('#mainContentSection').fadeIn();
		});
	} else {
		$('#passwordField').addClass('bg-danger text-light');
		$('#passwordField').select();
	}
}

function checkEmpty() {
	if ($('#passwordField').val().length == 0) {
		$('#passwordField').removeClass('bg-danger text-light');
	}
}
