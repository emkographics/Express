var date = new Date().toString();

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

module.exports = middleware;