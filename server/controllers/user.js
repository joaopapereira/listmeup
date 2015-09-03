'use strict';

var User = require('../models/User');
var passport = require('passport');
var config = require('../config');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.json(422, err);
};


exports.index = function(req, res) {
  console.log("User index");
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.send(500, err);
    res.json(200, users);
  });
}
