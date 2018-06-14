const express = require('express');
const router = express.Router();
var sanitize = require('sanitize');

var mysql = require('mysql');

var options = {
	root: __dirname + "/../public/"
};
/*
router.get('/', (req, res) => res.sendFile('index.html', options));
router.get('/about', (req, res) => res.sendFile('about.html', options));
router.get('/contact', (req, res) => res.sendFile('contact.html', options));
*/
router.get('/', (req, res) => res.render('home', {
	showTitle: true
}));
router.get('/about', (req, res) => res.render('about', {
	showTitle: true
}));
router.get('/contact', (req, res) => res.render('contact', {
	showTitle: true
}));
router.get('/psf', (req, res) => res.render('psf', {
	showTitle: true
}));
router.get('/particlesim', (req, res) => res.render('particlesim', {
	showTitle: true
}));
router.get('/hqapp', (req, res) => res.render('hqapp', {
	showTitle: true
}));
router.get('/dndsite', (req, res) => res.render('dndsite', {
	showTitle: true
}));
router.get('/balatbdeawltvm', (req, res) => res.render('madeline', {
	showTitle: true
}));
router.get('/secretary', (req, res) => res.render('secretary', {
	showTitle: true
}));

router.post('/secretary', (req, res) => {
	// Create mysql connection and query the database
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'secretary_user',
		password: 'secpass1',
		database: 'secretary'
	});

	connection.connect();

	var max = req.sanitize(req.body.max);
	var selected = req.sanitize(req.body.selected);
	var rank = req.sanitize(req.body.rank);
	var candidateNum = req.sanitize(req.body.candidateNum);
	connection.query("INSERT INTO score(max, selected, rank, candidate_num) VALUES(" + max + ", " + selected + ", " + rank + ", " + candidateNum + ")", function(err, rows, fields) {
			if (err) {
				console.log(err);
				res.json({textStatus: "database error"});
			} else {
				res.json({textStatus: "success"});
			}
		});

	connection.end();
});

router.get('/secretaryData', (req, res) => {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'secretary_user',
		password: 'secpass1',
		database: 'secretary'
	});

	connection.connect();
	connection.query("SELECT max, selected, rank, candidate_num from score", function(err, rows, fields) {
		var rankAvg = 0;
		var percentile = 0;
		var candidateNumAvg = 0;
		var numBest = 0;
		for (var i = 0; i < rows.length; i++) {
			rankAvg += rows[i].rank;
			if (rows[i].rank == 1) {
				numBest++;
			}
			percentile += rows[i].selected * 1.0 / rows[i].max;
			candidateNumAvg += rows[i].candidate_num;
		}
		rankAvg = rankAvg * 1.0 / rows.length;
		percentile = percentile * 1.0 / rows.length;
		candidateNumAvg = candidateNumAvg * 1.0 / rows.length;
		numBest = numBest * 1.0 / rows.length;
		var data = {
			"rankAvg": rankAvg,
			"percentileAvg": percentile,
			"numGames": rows.length,
			"candidateNumAvg": candidateNumAvg,
			"bestAvg": numBest
		};
		res.json(data);
	});

	connection.end();
});

module.exports = router;
