'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/', function(req, res, next) { //SQL FIND ALL THE ROWS OF POST AND SEND THEM BACK TO ME
  models.Post.findAll().then(function(records){
    res.render('index', {
      records: records
    });
  });
});


router.get('/submitform', function(req, res, next){
    res.render('submitform.ejs', {


    });
});

router.post('/submitform', function(req, res, next) {
  models.Post.create({
    from: req.body.from,
    title: req.body.title,
    full_text: req.body.full_text
  }).then(function(record) {
    res.redirect(`/posts?id=${record.id}`);
  });
});

router.get('/editform', function(req, res, next){
    res.render('editform.ejs', {
    });
});

router.post('/editform', function(req, res, next) {
  //SQL FIND ALL THE ROWS OF POST AND SEND THEM BACK TO ME
    models.Post.findByPk(req.body.postid).then(function(record) {
      console.log("req", req.body.postid)
      console.log("find record")
      console.log(record)
    }).then(function(record) {
        models.Post.f


    })
});
/*
  models.Post.create({
    from: req.body.from,
    title: req.body.title,
    full_text: req.body.full_text
  }).then(function(record) {
    res.redirect(`/posts?id=${record.id}`);
  });
});
*/












router.get('/posts', function(req, res, next){
        models.Post.findByPk(req.query.id).then(function(record)
{
         res.render('post',{
           record: record
         });
      });
});


/*
router.get('/', function(req, res, next){
  console.log(req.query);
  res.render('index', {
    name: req.query.name,
    lastname: req.query.lastname,
  });
});
*/



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
