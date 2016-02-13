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
    grades: "High school",
     address: "40 Irving Place", 
     city: "New York", 
     state: "NY", 
     zip: 10003,
     phone: "212-253-3299", 
     website: "http://schools.nyc.gov/SchoolPortals/02/M546/default.htm",
     location: [40.7353240, -73.9870810],
     annualTuition: 0,
     singleSex: false },

    {
      name: "Bronx Academy for Software Engineering",
      type: "Public school",
      borough: "Bronx",
      grades: "High school",
      address: "2474 Crotona Ave",
      city: "Bronx",
      zip: 10458,
      phone:"718-733-6024",
      website: "http://bronxsoftware.org/",
      location: [40.85523,-73.88245],
      annualTuition: 0,
      singleSex: false
    }

  ]
};

mongoose.connection.on('open', function() {
  mongoose.connection.db.dropDatabase(function() {

    console.log("Dropped old data, now inserting data");
    Promise.map(Object.keys(data), function(modelName) {
      return Promise.map(data[modelName], function(item) {
        return models[modelName].create(item);
      });
    }).then(function() {
      console.log("Finished inserting data");
    }, console.log).then(function() {
      mongoose.connection.close()
    });

  });
});