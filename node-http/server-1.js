var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function (req,res){
	console.log(req.headers);

	res.writeHead(200,{'Content-type':'text/html'});
	res.end('<h1>Hello World</h1>');
	//end sends back the response
})

server.listen(port, hostname, function(){
	console.log('Server started running at http://${hostname}:${port}!')
})