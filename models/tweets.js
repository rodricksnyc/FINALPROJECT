var mongoose = require('mongoose');
// var ReviewSchema = require('./reviews');

var Tweets = mongoose.model('tweets',
  {
    profile_pic_url: String,
    score: [Number]
  }
);

module.exports = Tweets;
