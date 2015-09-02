'use strict'﻿;
var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');
var auth = require('../services/auth/auth.service')


/* GET users listing. */
router.get('/', auth.hasRole('admin'), controller.index);

module.exports = router;
