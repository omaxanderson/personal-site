var maxRange = -1;
var numbers = new Array();
var currentQuestion = 1;

$(document).ready(function() {

	$('#secretary-start-btn').on('click', startGame);

});

function startGame() {
	// hide the intro text and display the first thing
	$('#secretary-intro-text').fadeOut(400, function() {
		// show first question
		maxRange = Math.floor(Math.random() * 1000); 	// the range for numbers is going to be between 0 and 1000
		// populate candidate array
		for (var i = 0; i < 15; i++) {
			numbers[i] = Math.floor(Math.random() * maxRange);
		}
		showQuestion(currentQuestion);
	});
}

function showQuestion(num) {
	var question = "<div class='text-center'><h3>Candidate " + num + "</h3>";
	question += "<p style='font-size: 3em'>" + numbers[num - 1] + "</p></div>";
	question += "<div class='d-flex justify-content-center'><button id='selectCandidateBtn' class='btn btn-success'>Select Candidate</button>";
	question += "<button id='nextCandidateBtn' class='btn btn-secondary ml-3'>Next Candidate</button></div>";

	$('#secretary-game-section').html(question);
	$('#secretary-game-section').fadeIn();

	// handlers need to be applied after html is rendered
	$('#nextCandidateBtn').on('click', nextCandidate);
	$('#selectCandidateBtn').on('click', selectCandidate);
}

function nextCandidate() {
	$('#secretary-game-section').fadeOut(() => {
		showQuestion(++currentQuestion);
	});
}

function selectCandidate() {
	// figure out the max and which # candidate they chose	
	var selected = numbers[currentQuestion - 1];
	numbers.sort( (a,b) => { return b - a } );

	console.log(numbers);
	var rank = 1;
	while (selected < numbers[rank - 1]) {
		rank++;
	}

	// lets make an ajax call here
	sendData(selected, numbers[0], rank);

	if (rank == 1) {
		rank = "";
	} else if (rank == 2) {
		rank += "nd";
	} else if (rank == 3) {
		rank += "rd";
	} else {
		rank += "th";
	}

	var results = "<div class='text-center'><h3>Results</h3>";
	results += "<p>You chose a candidate with a value of " + selected + ".</p>";
	results += "<p>The best candidate had a value of " + numbers[0] + ".</p>";
	results += "<p>You chose the " + rank + " best candidate!</p></div>";

	$('#secretary-game-section').html(results);

}

function sendData(selected, max, rank) {
	var data = {"selected": selected, "max": max, "rank": rank};
	var jsonData = JSON.stringify(data);
	$.ajax({
		url: "http://www.omaxwellanderson.com/secretary",
		dataType: "json",
		method: "POST",
		data: data,
		success: function(resp, textStatus) {
			console.log("success: " + resp['textStatus']);
		},
		error: function(xhr, textStatus, err) {
			console.log("error: " + err);
			console.log("status: " + textStatus);
		}
	});
}
