const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema ({
  question: String,
  subject: String,
  difficulty: Number,
  correct: String,
  incorrect: Array
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
