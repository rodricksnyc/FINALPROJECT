var express = require('express');
var router = express.Router();
var Tweet = require('../models/tweet');

// 'Index' route for listing all the restaurants
router.get('/', function(req, res) {
  Tweet.find({}, null, {sort: {profile_pic_url: 'asc'}}, function(err, tweets) {


    const deleteTweet = (id) => {
      console.log('hello')
      console.log(id)
    }

    res.render('tweets/index', {
      tweets: tweets || [],
      title: 'Trump Farts'
    });
  });
});

// 'Update' route that takes the data from the 'edit' form and updates an existing restaurant
router.post('/:id', function(req, res) {
  let id = req.params.id;
  let score = req.body.score

  Tweet.findOneAndUpdate(
    { _id: id},
    { $push: {score: score} },
    { new: true },
    function(err, tweet) {
      var obj = Object.assign(tweet.toObject(), { avgScore: tweet.avgScore() })
      res.json(obj);
    }
  );
});

module.exports = router;
