const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Bon Jour World with skies so blue and sunny, don\'t you see!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});