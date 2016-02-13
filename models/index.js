var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codingdeserts');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = {
  School: require('./school'),
};
