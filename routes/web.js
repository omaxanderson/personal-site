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
router.get('/about', (req, res) => res.send('about.html', options));
router.get('/contact', (req, res) => res.send('contact.html', options));

module.exports = router;
