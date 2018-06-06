const express = require('express');
const router = express.Router();
var sanitize = require('sanitize');

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'secretary_user',
	password: 'secpass1',
	database: 'secretary'
});

connection.connect();

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
router.get('/secretary', (req, res) => res.render('secretary', {
	showTitle: true
}));

router.post('/secretary', (req, res) => {
	// add the stuff to database
	var max = req.sanitize(req.body.max);
	var selected = req.sanitize(req.body.selected);
	var rank = req.sanitize(req.body.rank);
	connection.query("INSERT INTO score(max, selected, rank) VALUES(" + max + ", " + selected + ", " + rank + ")", function(err, rows, fields) {
			if (err) {
				console.log(err);
				res.json({textStatus: "database error"});
			} else {
				res.json({textStatus: "success"});
			}
		});
});
router.get('/secretaryData', (req, res) => {
	connection.query("SELECT max, selected, rank from score", function(err, rows, fields) {
		var rankAvg = 0;
		var percentile = 0;
		for (var i = 0; i < rows.length; i++) {
			rankAvg += rows[i].rank;
			percentile += rows[i].selected * 1.0 / rows[i].max;
		}
		rankAvg = rankAvg * 1.0 / rows.length;
		percentile = percentile * 1.0 / rows.length;
		var data = {
			"rankAvg": rankAvg,
			"percentileAvg": percentile,
			"numGames": rows.length
		};
		res.json(data);
	});
});

module.exports = router;
