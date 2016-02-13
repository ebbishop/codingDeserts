// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var mongoose = require('mongoose');
var models = require('./models');


var data = {
  School: [
    {name: "Academy for Software Engineering",
    type: "Public school",
    borough: "Manhattan",
    address: "40 Irving Place",
    city: "New York",
    state: "NY",
    zip: 10003,
    phone: "212-253-3299",
    website: "http://schools.nyc.gov/SchoolPortals/02/M546/default.htm",
    location: [40.7353240, -73.9870810],
    annualTuition: 0,
    grades: 'Elementary',
    singleSex: false }
  ]
};

mongoose.connection.on('open', function() {
  mongoose.connection.db.dropDatabase(function() {

    console.log("Dropped old data, now inserting data");
    Promise.map(Object.keys(data), function(School) {
      return Promise.map(data[School], function(item) {
        return models[School].create(item);
      });
    }).then(function() {
      console.log("Finished inserting data");
    }, console.log).then(function() {
      mongoose.connection.close()
    });

  });
});
