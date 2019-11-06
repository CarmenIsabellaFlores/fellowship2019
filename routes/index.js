'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/', function(req, res, next) {
  console.log(req.query);
  res.render('index', {
    name: req.query.name,
    lastname: req.query.lastname,

  })
});




router.get('/DataSend', function(req, res, next) {
  console.log(req.query);
  res.render('DataSend', {
    name: req.query.name,
    lastname: req.query.lastname,

  })
});

router.post('/DataSend2', function(req, res, next) {
  console.log(req.query);
  res.render('DataSend', {
    name: req.body.name,
    lastname: req.body.lastname,

  })
});


router.get('/logout', function(req,res,next){
  req.logout();
  req.flash('info', 'You have been logged out.');
  res.redirect('/');
});

module.exports = router;
