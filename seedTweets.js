// require('dotenv').config();
//
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds157614.mlab.com:57614/trumpfarts');

var Tweet = require('./models/tweet')


  Tweet.find({}, (err, res) => {
    console.log(res)
    if (res.length === 0) {

      var tweets = ['/img/tweet0.png', '/img/tweet00.png', '/img/tweet1.png', '/img/tweet2.png', '/img/tweet3.png', '/img/tweet4.png', '/img/tweet04.png', '/img/tweet5.png', '/img/tweet6.png', '/img/tweet7.png', '/img/tweet8.png', '/img/tweet9.png', '/img/tweet10.png']


      tweets.map(function(tweet){
        var tweetToAdd = {
          profile_pic_url: tweet,
          score: 0
        }

        console.log(tweetToAdd )
        Tweet.create(tweetToAdd, function(err, result) {
          console.log(result)
        });
      })
    }
  })
