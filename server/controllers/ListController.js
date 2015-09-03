'use strict';

var List = require('../models/List');

exports.index = function(req, res) {
  List.find({}, function (err, lists) {
    if(err) return res.send(500, err);
    res.status(200).json(lists);
  });
}
