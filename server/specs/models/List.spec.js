'use strict';

var should = require('should');
var app = require('../../app');
var ListItem = require('../../models/ListItem');
var List = require('../../models/List');

var item = new ListItem({
  name: "bamm",
  description: "my description"
});
var allItems = [
  ListItem({
    name: "Bear",
    description: "Because is brown and big"
  }),
  ListItem({
    name: "Fluffy",
    description: "To much fur"
  })
];
var list1 = new List({
  name: "Dog names",
  note: "My list of dog names",
  items: allItems
})
list1.items = allItems;

describe('List Model', function() {
  beforeAll(function(done) {
    // Clear users before testing
    List.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    List.remove().exec().then(function() {
      done();
    });
  });
  it('should start empty', function(done) {
    List.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it('should fail when no name is present', function(done) {
    var myList = new List(list1);
    myList.name = '';
    myList.save(function(err) {
      should.exist(err);
      done();
    });
  });
  it('should add correctly', function(done) {
    list1.save(function(err) {
      should.not.exist(err);
      done();
    });
  });
  it('should fail when one item has no name', function(done) {
    var list = new List(list1);
    list.items[0].name = '';
    list.save(function(err) {
      should.exist(err);
      done();
    });
  });
});
