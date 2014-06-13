
var express = require('express');
var app = module.exports = express();

app.use(require('./retrieve_all.js'));
app.use(require('./retrieve_one.js'));
app.use(require('./update.js'));
