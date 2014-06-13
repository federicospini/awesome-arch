
var mongo_url = 'awesome-arch';
var mongojs = require('mongojs');

var collections = [
  'users',
];

/** 
 * db-connection
 */

var db;

module.exports = function () {
  if (db) {  
    return db;
  }

  db = mongojs(mongo_url, collections);
  return db;
}; 
