'use strict'﻿;
var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');
var auth = require('../services/auth/auth.service')


/* GET users listing. */
router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.createUpdate);

module.exports = router;
