var express = require('express');
var app = express();
var PORT = 3001;
var date = new Date().toString();

/*
app.get('/', function(req, res){
	res.send("Hello Express");
});
*/

var middleware = {
	requireAuthentication: function(re1, res, next) {
		console.log('private route hit!');
		next();
  },
  logger: function(req, res, next) {
	  console.log('Request: [' + date + '] ---> '  + req.method + ' ' + req.originalUrl );
	  next();
  }
}

//app.use(middleware.requireAuthentication); // applys middleware on every requrest.
app.use(middleware.logger); // logs all url requests.
/*
//applys middlware to aboutus page only
app.get('/about-us', middleware.requireAuthentication, function(req, res){
	res.send("About Us");
});
*/

app.get('/about-us', function(req, res){
	res.send("About Us");
});

app.use(express.static(__dirname + '/public'));

//console.log(__dirname);

app.listen(PORT, function() {
	console.log("Express server started on port: " + PORT);
});