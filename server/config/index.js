var config = require('./configuration.json');
var path = require('path');

module.exports = {
  configuration: config,
  database: config["database"],
  root: path.normalize(__dirname + '/../..')
};
