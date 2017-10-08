var Tweets = require('./models/tweets')

function seedTweets () {

  Tweets.find({}, (err, res) => {
    console.log(res)
    if (res.length === 0) {

      var tweets = ['/img/tweet0.png', '/img/tweet00.png', '/img/tweet1.png', '/img/tweet2.png', '/img/tweet3.png', '/img/tweet4.png', '/img/tweet04.png', '/img/tweet5.png', '/img/tweet6.png', '/img/tweet7.png', '/img/tweet8.png', '/img/tweet9.png', '/img/tweet10.png']

      tweets.map(function(tweet){
        var tweetToAdd = {
          profile_pic_url: tweet,
          score: 0
        }

        console.log(tweetToAdd )
        Tweets.create(tweetToAdd, function(err, result) {
          console.log(result)
        });
      })
    }
  })
}

module.exports = seedTweets
