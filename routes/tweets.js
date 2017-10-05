var express = require('express');
var router = express.Router();
var Tweets = require('../models/tweets');

// 'Index' route for listing all the restaurants
router.get('/', function(req, res) {
  Tweets.find({}, null, {sort: {profile_pic_url: 'asc'}}, function(err, tweets) {


    const deleteTweet = (id) => {
      console.log('hello')
      console.log(id)
    }


    res.render('tweets/index', {
      tweets: tweets || [],
      title: 'Tweet List',
      deleteTweet: "deleteTweet()"
    });
  });
});

// 'Update' route that takes the data from the 'edit' form and updates an existing restaurant
router.post('/:id', function(req, res) {
  let id = req.params.id;
  let score = req.body.score

  Tweets.update(
    { _id: id},
    { $push: {score: score} },
    function(err, tweets) {
      res.redirect(`/tweets`);
    }
  );
});

module.exports = router;
