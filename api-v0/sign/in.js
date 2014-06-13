
var express = require('express');
var app = module.exports = express();

var db = require('../../db-connection.js')();

app.post('api/v0/signin', function (req, res) {
  var session = req.session;
  var body = req.body;

  db.users.find({email: body.email}, function (err, user) {
    session.is_signed = true;
    session.user_id = user._id;
    res.send(user);
  });
});
