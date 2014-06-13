
var express = require('express');
var app = module.exports = express();

app.use(require('./up.js'));
app.use(require('./in.js'));
app.use(require('./ed.js'));
app.use(require('./out.js'));
