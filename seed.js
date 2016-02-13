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
      state: "NY"
      zip: 10458,
      phone:"718-733-6024",
      website: "http://bronxsoftware.org/",
      location: [40.85523,-73.88245],
      annualTuition: 0,
      singleSex: false,
      verified: false
    },
       {
      name: "Bronx Academy for Software Engineering",
      type: "Public school",
      borough: "Bronx",
      grades: "High school",
      address: "2474 Crotona Ave",
      city: "Bronx",
      state: "NY",
      zip: 10458,
      phone:"718-733-6024",
      website: "http://bronxsoftware.org/",
      location: [40.85523,-73.88245],
      annualTuition: 0,
      singleSex: false,
      verified: false
    },
    {
      name: "High School Of Telecommunication Arts & Technology",
      type:  "Public school",
      borough: "Brooklyn",
      grades: "High school",
      address: "350 67th St",
      city: "Brooklyn",
      state:  "NY",
      zip:  11220,
      phone: "718-759-3400",
      website: "http://www.hstat.org/",
      location: [40.63685,-74.02318],
      annualTuition: 0,
      singleSex: FALSE,
      verified: FALSE
    },
    {
      name: "J.H.S. 062 Ditmas",
      type: "Public school",
      borough: "Brooklyn",
      grades:  "Middle school",
      address: "700 Cortelyou Rd",
      city:  "Brooklyn",
      state: "NY",
      zip:  11218,
      phone: "(718) 941-5450",
      website:  "http://ditmasis62.webs.com/",
      location: [40.63857,-73.97124],
      annualTuition:  0,
      singleSex: FALSE,
      verified: FALSE
    },
    {
      name: "Saint Saviour High School",
      type: "Private school",
      borough:  "Brooklyn",
      grades:  "High school",
      address: "588 Sixth Street",
      city:  "Brooklyn",
      state:  "NY",
      zip:  11215,
      phone: "(718) 768-4406",
      website: "www.stsaviour.org",
      location: [40.66704,-73.97708],
      tuition:  9850,
      singleSex: true,
      verified: false
    },

    {
      name: "Aspirations Diploma Plus HS",
      type: "Public school",
      borough: "Brooklyn",
      grades:  "High school",
      address: "1495 Herkimer St",
      city: "Brooklyn",
      state:  "NY",
      zip:  11233,
      phone: "718-498-5257",
      website:  "http://aspirationshs.com/",
      location: [40.67757,-73.90406],
      tuition:  0,
      singleSex: FALSE,
      verified: FALSE

    },

    {
      name: "Academy of Innovative Technology",
      type:  "Public school",
      borough: "Brooklyn",
      grades:  "High school",
      address: "999 Jamaica Avenue",
      city:  "Brooklyn",
      state:  "NY",
      zip:  11208,
      phone: "718-827-2469",
      website: "http://www.aoiths.org",
      location: [40.69301,-73.86907],
      tuition:  0,
      singleSex: FALSE,
      verified: FALSE
    },

    {
      name: "J.H.S. 157 Stephen A. Halsey",
      type: "Public school",
      borough: "Queens",
      grades: "Middle school",
      address: "63-55 102nd Street",
      city: "Rego Park",
      state: "NY",
      zip: 11374,
      phone: "718-830-4910",
      website: "http://halsey157.org/",
      location: [40.73229,-73.85305],
      tuition: 0,
      singleSex: FALSE,
      verified: FALSE

    },

    {
      name: "Academy for Software Engineering",
      type: "Public school",
      borough: "Manhattan",
      grades: "High school",
      address: "40 Irving Place",
      city: "New York",
      state: "NY",
      zip: 10003,
      phone: "212-253-3299",
      website: "http://schools.nyc.gov/SchoolPortals/02/M546/default.htm",
      location: [40.7353240,-73.9870810],
      tuition: 0,
      singleSex: FALSE,
      verified: FALSE

    },
    {
      name: "J.H.S. 074 Nathaniel Hawthorne",
      address: "Public school",
      borough: "Queens",
      grades: "Middle school",
      address: "61-15 Oceania St",
      city: "Bayside",
      state: "NY",
      zip: "11364",
      phone:" 718-631-6800",
      website: "http://www.ms74.com/",
      location: [40.74508,-73.76688],
      tuition: 0,
      singleSex: FALSE,
      verified: FALSE
    },
    {
      name: "Bayside High School",
      address: "Public school",
      borough: "Queens",
      grades: "High school",
      address: "3224 Corporal Kennedy Street",
      city: "Bayside",
      state: "NY",
      zip: 11361,
      phone: "(718) 229-7600",
      website: "http://www.baysidehighschool.org/",
      location: [40.77110,-73.78021],
      tuition: 0,
      singleSex: FALSE,
      verified: FALSE
    },
    {
      name: "Bronx Compass High School",
      type: "Public school",
      borough: "Bronx",
      grades: "High school",
      address: "1980 Lafayette Avenue",
      city: "Bronx",
      state: "NY",
      zip: 10473,
      phone: "718-828-1206",
      website: "http://www.bronxcompass.org",
      location: [40.82145,-73.85565],
      tuition: 0,
      singleSex: FALSE,
      verified: FALSE
    },
    {
      name: "Eagle Academy For Young Men",
      type: "Public school",
      borough: "Bronx",
      grades: "High school",
      address: "4143 3rd Ave",
      city: "Bronx",
      state: "NY",
      zip: 10457,
      phone: "(718) 466-8000",
      website: "http://www.eaglebronx.org/",
      location: [40.84532,-73.89739],
      tuition: 0,
      singleSex: FALSE,
      verified: FALSE
    },
    {
      name: "Bronx Academy for Software Engineering",
      type: "Public school",
      borough: "Bronx",
      grades: "High school",
      address: "2474 Crotona Ave",
      city: "Bronx",
      state: "NY",
      zip: "10458",
      phone: "(718) 733-6024",
      website: "http://bronxsoftware.org/",
      location: [40.85523,-73.88245],
      tuition: 0,
      singleSex: FALSE,
      verified: FALSE
    },
    {
      name: "Bronx Park Middle School",
      type: "Public school",
      borough: "Bronx",
      grades: "Middle school",
      address: "2441 Wallace Ave",
      city: "Bronx",
      state: "NY",
      zip: 10469,
      phone: "718-652-6090",
      website: "http://www.bronxparkms.info/",
      location: [40.86206,-73.86459],
      tuition: 0,
      singleSex: FALSE,
      verified: FALSE
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