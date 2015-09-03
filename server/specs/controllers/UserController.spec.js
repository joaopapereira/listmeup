'use strict';

var should = require('should');
var app = require('../../app');
var User = require('../../models/User');
var UserController = require('../../controllers/User');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

var user1 = new User({
  provider: 'local',
  name: 'Fake User1',
  email: 'test1@test.com',
  password: 'password'
});


/*describe('Create User', function() {
  beforeAll(function(done) {
  });

  afterAll(function(done) {
  });

  it('should create a new user', function(done) {

  });
});*/
