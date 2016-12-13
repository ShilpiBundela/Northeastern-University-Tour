var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});
