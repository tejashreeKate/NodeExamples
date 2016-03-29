//Implementing rest api
var express = require('express'),
	morgan = require('morgan'),
	http = require('http'),
	bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

//prints log information to console on server side
app.use(morgan('dev'));

//using body Parser
app.use(bodyParser.json());

app.all('/dishes',function (req,res,next){
	res.writeHead(200,{'Content-type':'text/plain'});

	next();
});

app.get('/dishes',function (req,res,next){
	res.end('Will send all dishes to you')
});

app.post('/dishes',function (req,res,next){
	res.end('will add the dish: '+req.body.name +" with details "+req.body.description)
});

app.delete('/dishes',function (req,res,next){
	res.end('Deleting all dishes')
});

app.get('/dishes/:dishId',function (req,res,next){
	res.end('Will send the details of the dish '+req.params.dishId+" to you.")
});


//gives access to static files- only get is allowed on static files
app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
	console.log(`Server started running at http://${hostname}:${port}`)
})