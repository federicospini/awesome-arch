
var express = require('express');
var app = module.exports = express();

var db = require('../../db-connection.js')();

app.get('/api/v0/users/:id', function (req, res) {
  db.users.findOne({_id: req.params.id}, function (err, user) {
    res.send(user);
  });
});
