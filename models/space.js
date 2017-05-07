const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpaceSchema = new Schema ({
  position: String,
  action: String,
  linked: [{
    type: Schema.Types.ObjectId,
    ref: 'Space'
  }]
});

const Space = mongoose.model('Space', SpaceSchema);
module.exports = Space;
