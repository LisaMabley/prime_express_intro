// Create at least one route to serve something back to the client, this can be 'Hello World' or a page or something else entirely, it is up to you

var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, resp) {
  console.log('get function called');
  resp.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, function() {
  console.log('Listening for requests on port 3000.');
});
