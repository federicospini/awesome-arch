
var express = require('express');
var app = module.exports = express();

app.get('api/v0/signed', function (req, res) {
  var session = req.session;
  var body = req.body;

  res.send(session.is_signed);
});
