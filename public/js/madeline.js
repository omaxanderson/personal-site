// object to hold "passwords" and hints
var passwords = new Array();
passwords.push([ "The most majestic pup of all time.", "bode" ]);
passwords.push(["The prettiest pup of all time.", "lucy" ]);
passwords.push(["The most sausage-like pup of all time.", "mongo" ]);
passwords.push(["Your freshman year dorm.", "emerson" ]);
passwords.push(["Max's freshman year dorm (how's your memory??).", "mckee" ]);
passwords.push([ "The best NHL hockey team.", "wild"]);
/*
var passwords = [
	{ hint: "The most majestic pup of all time.", value: "bode" },
	{ hint: "The prettiest pup of all time.", value: "lucy" },
	{ hint: "The most sausage-like pup of all time.", value: "mongo" },
	{ hint: "Your freshman year dorm.", value: "emerson" },
	{ hint: "Max's freshman year dorm (how's your memory??).", value: "mckee" },
	{ hint: "The best NHL hockey team.", value: "wild" }
];
*/

var randomNum = Math.floor(Math.random() * passwords.length);

$(document).ready(function() {
	$('#entryFormSection').css('height', $(window).innerHeight() - $('.navbar').outerHeight());
	$('#passHint').html("<p>" + passwords[randomNum][0] + "</p>");
});

function submitPassword(event) {
	// stop default action
	event.preventDefault();

	if ($('#passwordField').val().toLowerCase() == passwords[randomNum][1]) {
		// fade that field and fade in the rest of it
		$('#entryFormSection').fadeOut(1500, function() {
			$('#entryFormSection').remove();

			// fade in that other shit
			$('#mainContentSection').addClass('d-flex justify-content-center align-items-center');
			$('#mainContentSection').css('height', $(window).innerHeight() - $('.navbar').outerHeight());
			$('#mainContentSection').fadeIn();
		});
	}
}
