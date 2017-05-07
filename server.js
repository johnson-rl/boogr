const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');
const path = require("path");

app.use(express.static(path.resolve(__dirname, './react-ui/build')));
app.use(bodyParser.urlencoded({
  extended : true
}));

app.get('*', (req, res) => {
  console.log(path.resolve(__dirname, './react-ui/build', 'index.html'))
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});


app.listen(process.env.PORT || 3000, function(){
  console.log('express server online on port', 3000)
});
