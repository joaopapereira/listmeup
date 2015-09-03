'use strict'﻿;
var express = require('express');
var router = express.Router();
var controller = require('../controllers/ListController');


/* GET all lists. */
router.get('/', controller.index);

module.exports = router;
