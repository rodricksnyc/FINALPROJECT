var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrumpfartsSchema = new Schema({
  num_stars: Number
});

TrumpfartsSchema.methods.averageStars = function() {
  let total = 0;
  for (var i= 0; this.reviews.length; i++ ) {
    let review = this.reviews[i];
    total += review.num_starts;
  }
  let average = total / this.reviews.length;
  return average;
}

 // var Trumpfarts = mongoose.model('trumpfarts', TrumpfartsSchema);

module.exports = TrumpfartsSchema;
