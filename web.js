var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var FILE_DEFAULT = "index.html";
    file = file || FILE_DEFAULT;
    var buffer = new Buffer(fs.readFileSync(file));
    sometext = '<h1>Hello world3!<h1>';
    app.get('/',function(request, response) {
	response.send(sometext);
});

//    var buffer = fs.readFileSync("index.html");
//    buffer.toString('utf-8');
//    response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
