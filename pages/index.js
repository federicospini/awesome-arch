
var express = require('express');
var app = module.exports = express();

var home = require('./home.js');
app.get('/', home);
app.get('/index.html', home);
app.get('/home.html', home);
