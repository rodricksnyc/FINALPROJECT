var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tweetSchema = new Schema({
  profile_pic_url: String,
  score: [Number]
});

tweetSchema.methods.avgScore = function() {
  let total = 0
  for (var j = 0; j < this.score.length; j++ ) {
    let score = this.score[j]
    total += score
  }
  let average = total / this.score.length
  return average;
}

var Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;
