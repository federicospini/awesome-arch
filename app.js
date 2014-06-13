
/**
 * set the ENV
 */

var env = process.env.NODE_ENV;

if (env === undefined) {
  env = process.env.NODE_ENV = 'development';
}

var async = require('async');
var morgan = require('morgan');
var body_parser = require('body-parser');
var cookie_parser = require('cookie-parser');
var method_override = require('method-override');
var session = require('express-session');
var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var app = express();

var MongoStore = require('connect-mongo')(session);
var mongojs = require('mongojs');
var db = mongojs('awesome-arch', ['users']);
var secret = 'aW3some-4rch';
var coockie_max_age = 1000 * 3600 * 24 * 7; // 7 days
var port = 3000;

app
  .set('env', env)
  .set('name', 'awesome-arch')
  .use(morgan('dev'))
  .use(cookie_parser())
  .use(session({
    secret: secret,
    cookie: { maxAge: coockie_max_age },
    store: new MongoStore({
      db: 'awesome-arch',
      collection: 'sessions',
      stringify: false,
      auto_reconnect: true
    })
  }))
  .use(body_parser())
  .use(compression())
  .use(favicon(__dirname + '/public/favicon.ico'))
  .use(express.static(__dirname + '/public'));

app.use(require('./api-v0/sign'));
app.use(require('./api-v0/users'));
app.use(require('./pages'))

app.listen(port, function () { console.log('app is listening on port ' + port); });

