var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var models = require('../models');
var School = models.School;


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');

});

// get request for all data points
router.get('/api/schools', function(req, res, next){
  School.find({})
  .then(function(data){
    res.json(data);
  })
})

router.get('/api/schools/:borough', function(req, res, next){
  School.find({borough: req.params.borough})
  .then(function(data){
    res.json(data);
  })
})

module.exports = router;
