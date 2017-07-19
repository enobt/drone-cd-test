const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Bon Jour World with skys so blue and sunny!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});