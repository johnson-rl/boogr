const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/boogie-down');

module.exports.Question = require('./question.js');
module.exports.Space = require('./space.js');
module.exports.User = require('./user.js');
