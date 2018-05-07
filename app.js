const express = require('express');
const app = express();
var path = require('path');
var handlebars = require('express-handlebars');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set up the router
var router = require('./routes/web');
app.use('/', router);

// serve static pages
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('App listening on port 3000'));
