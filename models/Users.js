var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  email: String,
  rating: {type: Number, default: 1200},
});

mongoose.model('User', UserSchema);
