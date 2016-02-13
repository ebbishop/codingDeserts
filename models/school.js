var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema({
  name: String,
  type: String,
  borough: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  phone: String,
  website: String,
  location: [Number],
  annualTuition: Number,
  grades: String,
  singleSex: Boolean
})

module.exports = mongoose.model('School', SchoolSchema);
