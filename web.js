var express = require('express');

var app = express.createServer(express.logger());
//var fs= [];
app.get('/', function(request, response) {
//var a = fs.readFileSync('index.html');
 // response.send(a.toString());
response.send('Hello World!xxxx');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
