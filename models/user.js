const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  name: String,
  position: String,
  tissues: String,
  boogies: String,
  correct: Number,
  incorrect: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
