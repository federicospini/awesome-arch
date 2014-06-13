
var fs = require('fs');
var dot = require('dot');

var db = require('../db-connection.js')();

/**
 * / • /index.html • /home.html 
 */

var index_str = fs.readFileSync('./pages/home.html', 'utf-8');
var index_tmpl = dot.template(index_str);

module.exports = function (req, res) {
  var session = req.session;
  var user_id = session.user_id;
  var data = {
    session: {
      is_signed: session.is_signed
    }
  };

  db.users.findOne({_id: user_id}, function (err, user) {
    data.user = user;
    var ctx = {
      data: JSON.stringify(data)
    };
    console.log(ctx);
    res.send(index_tmpl(ctx));
  });
};
