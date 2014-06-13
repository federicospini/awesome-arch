
var express = require('express');
var app = module.exports = express();

var db = require('../../db-connection.js')();

app.get('/api/v0/users', function (req, res) {
  db.users.find({}, function (err, users) {
    res.send(users);
  });
});
