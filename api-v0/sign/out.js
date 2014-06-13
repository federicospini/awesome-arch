
var express = require('express');
var app = module.exports = express();

app.post('api/v0/signout', function (req, res) {
  var session = req.session;
  var body = req.body;
  session.is_signed = false;
  session.user_id = undefined;
  res.send();
});
