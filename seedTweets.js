// require('dotenv').config();
//
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds157614.mlab.com:57614/trumpfarts');

var Tweet = require('./models/tweet')


  Tweet.find({}, (err, res) => {
    console.log(res)
    if (res.length === 0) {

      var tweets = ['/img/tweet0.png', '/img/tweet00.png','/img/tweet000.png', '/img/tweet1.png', '/img/tweet2.png','/img/tweet02.png', '/img/tweet3.png', '/img/tweet03.png', '/img/tweet4.png', '/img/tweet06.png', '/img/tweet5.png', '/img/tweet6.png', '/img/tweet7.png','/img/tweet07.png', '/img/tweet8.png','/img/tweet08.png', '/img/tweet9.png', '/img/tweet09.png', '/img/tweet009.png','/img/tweet10.png', '/img/tweet010.png', '/img/tweet11.png', '/img/tweet011.png', '/img/tweet12.png', '/img/tweet13.png', '/img/tweet14.png', '/img/tweet014.png', '/img/tweet15.png', '/img/tweet015.png', '/img/tweet16.png', '/img/tweet016.png', '/img/tweet17.png', '/img/tweet017.png', '/img/tweet18.png', '/img/tweet19.png', '/img/tweet019.png', '/img/tweet10.png', '/img/tweet21.png', '/img/tweet021.png', '/img/tweet22.png', '/img/tweet23.png', '/img/tweet023.png', '/img/tweet24.png', '/img/tweet25.png', '/img/tweet025.png', '/img/tweet26.png', '/img/tweet026.png', '/img/tweet27.png', '/img/tweet027.png', '/img/tweet28.png', '/img/tweet29.png', '/img/tweet30.png', '/img/tweet030.png', '/img/tweet31.png', '/img/tweet32.png', '/img/tweet33.png', '/img/tweet34.png', '/img/tweet35.png', '/img/tweet36.png', '/img/tweet37.png']


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
