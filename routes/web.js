const express = require('express');
const router = express.Router();
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

module.exports = router;
