
//
$("form.js-tweet-form").submit(function(e){
   e.preventDefault();
   var tweetId = $(this).data('tweetid');
   var score = $(this).find(".js-score").val();
   var self = this;

    $.ajax({
      type: "POST",
      url: `/tweets/${tweetId}`,
      data: {
        score: score
      }
    })
    .done(function(data) {
      $(self).parent().find(".js-avg-score").text(data.avgScore);
    });
});



// $(document).ready(function()
//   $("submit-btn").submit(function(event) {
//     event.preventDefault();
//   });
//   var data;
//           // build a json object or do something with the form, store in data
//   $.post('/tweets', data, function(resp) {
//               alert(resp);
//               // do something when it was successful
//           });
//       });
//   });




function play(){
      var audio = document.getElementById("audio");
      audio.play();
                }
