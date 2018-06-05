const express = require('express');
const app = express();
var path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');


// set up the body-parser module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up sanitizer module
app.use(expressSanitizer());

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set up the router
var router = require('./routes/web');
app.use('/', router);

// serve static pages
app.use(express.static(path.join(__dirname, 'public')));

app.listen(80, () => console.log('App listening on port 80'));
