const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  name: String,
  position: String,
  tissues: String,
  boogies: String,
  tally: Number,
  correct: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }],
  incorrect: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
