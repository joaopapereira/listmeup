'use strict';

var should = require('should');
var app = require('../../app');
var ListItem = require('../../models/ListItem');

var item = new ListItem({
  name: "bamm",
  description: "my description"
});

describe('ListItem Model', function() {
  it('should fail when no name is present', function(done) {
    item.name = '';
    item.save(function(err) {
      should.exist(err);
      done();
    });
  });

});
