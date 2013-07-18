var express = require('express');

var app = express.createServer(express.logger());
var fs= require('fs');
app.get('/', function(request, response) {
var a = fs.readFileSync('index.html');
  response.send(a.toString());
//response.send('Hello World!xxxx');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
