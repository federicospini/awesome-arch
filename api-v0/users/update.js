
var express = require('express');
var app = module.exports = express();

var db = require('../../db-connection.js')();

app.post('/api/v0/users/:id', function (req, res) {
  var id = req.params.id;
  var body = req.body;
  
  db.users.find({_id: id}, function (err, user) {
    user = user || {};
    var body = req.body;
    var updated_user = body;
    var p;

    for (p in user) {
      updated_user[p] = body[p] || user[p];
    }
  
    db.users.update({_id: id}, {$set: updated_user}, {upsert: true}, function (err) {
      res.send(updated_user);
    });
  });
});
