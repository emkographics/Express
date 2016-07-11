var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001;

var middleware = require('./middleware.js');
app.use(middleware.logger); // logs all url requests.

app.get('/about-us', middleware.requireAuthentication, function(req, res){
	res.send("About Us");
});

app.use(express.static(__dirname + '/public')); // define root path

app.listen(PORT, function() {
	console.log("Express server started on port: " + PORT);
});

//console.log(__dirname); // check the directory path
