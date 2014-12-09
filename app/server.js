var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.send('It worked!');
});

var port = 8080;

app.listen(port);

console.log('Server is running on' + port);