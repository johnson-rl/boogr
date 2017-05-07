const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');
const path = require("path");

app.use(express.static(path.resolve(__dirname, './react-ui/build')));
app.use(bodyParser.urlencoded({
  extended : true
}));

////////////////////
////Routes
////////////////////

// **** QUESTIONS ****
// Get one question
app.get('/api/question/:id', function(req, res) {
  db.Question.findOne({_id: questionId}, function(err, question) {
    if (err) {
      console.log('Question findOne error in server.js', err);
    }
    console.log('your single question is ', question);
    res.send(question);
  })
})

// Create question
app.post('/api/question', function (req, res) {
  console.log(req.body)

  // create new question with form data
  var newQuestion = new db.Question({
    question: req.body.question,
    subject: req.body.subject,
    difficulty: req.body.difficulty,
    correct: req.body.correct,
    incorrect: req.body.incorrect
  });

  //save the question to the db
  newQuestion.save(function(err, question){
    if (err) {
      res.send(err)
      console.log("save question error: " + err);
    }
    res.send(question)
    console.log("saved ", question.question);
  })
})

// **** BOARD ****
// Get one board space
app.get('/api/board/:id', function(req, res) {
  db.Board.findOne({_id: boardId}, function(err, board) {
    if (err) {
      console.log('Board findOne error in server.js', err);
    }
    console.log('your single board space is ', board);
    res.send(board);
  })
})

// **** USER ****
// Get user data
app.get('/api/user/:id', function(req, res) {
  db.User.findOne({_id: userId}, function(err, user) {
    if (err) {
      console.log('User findOne error in server.js', err);
    }
    console.log('your single user space is ', user);
    res.send(user);
  })
})

// Create user
app.post('/api/user', function (req, res) {
  console.log(req.body)

  // create new user with form data
  var newUser = new db.User({
    name: req.body.name,
    position: req.body.position,
    tissues: req.body.tissues,
    boogies: req.body.boogies,
    correct: req.body.correct,
    incorrect: req.body.incorrect
  });

  //save the user to the db
  newUser.save(function(err, user){
    if (err) {
      return console.log("save user error: " + err);
    }
    console.log("saved ", user.user.name);
  }

  // edit one user
  app.put('/api/user/:id', function (req, res){
    var userId = req.params.id;
    db.User.findOne({ _id: userId }, function(err, foundUser){
      if(err){
        console.log('FindOne user error in server.js when trying to edit user', err);
      }
      console.log('your single user is ');
      foundUser.name = req.body.name || foundUser.name;
      foundUser.position = req.body.position || foundUser.position;
      foundUser.tissues = req.body.tissues || foundUser.tissues;
      foundUser.boogies = req.body.boogies || foundUser.boogies;
      foundUser.correct = req.body.correct || foundUser.correct;
      foundUser.incorrect = req.body.incorrect || foundUser.incorrect;
      foundUser.save(function(err, user){
        if (err) {
          return console.log("save user error: " + err);
        }
        console.log("saved ", user);
        res.json(user);
      });
    });
  });

// delete user
app.delete('/api/user/:id', function (req, res) {
  console.log('user delete', req.params);
  var userId = req.params.id;
  db.User.findOneAndRemove({ _id: userId }, function (err, deletedUser) {
    res.json(deletedUser);
  });
  })
})

app.get('*', (req, res) => {
  console.log(path.resolve(__dirname, './react-ui/build', 'index.html'))
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});


app.listen(process.env.PORT || 3000, function(){
  console.log('express server online on port', 3000)
});
