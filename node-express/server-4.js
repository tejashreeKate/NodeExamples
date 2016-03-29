//Using express router

var express = require('express'),
	morgan = require('morgan'),
	http = require('http'),
	bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

//prints log information to console on server side
app.use(morgan('dev'));

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function (req,res,next){
	res.writeHead(200,{'Content-type':'text/plain'});

	next();
})
.get(function (req,res,next){
	res.end('Will send all dishes to you')
})
.post(function (req,res,next){
	res.end('will add the dish: '+req.body.name +" with details "+req.body.description)
})
.delete(function (req,res,next){
	res.end('Deleting all dishes')
});

//url with id
dishRouter.route('/:dishId')
.all(function (req,res,next){
	res.writeHead(200,{'Content-type':'text/plain'});

	next();
})
.get(function (req,res,next){
	res.end('Will send the details of the dish '+req.params.dishId+" to you.")
});

app.use('/dishes',dishRouter);

app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
	console.log(`Server started running at http://${hostname}:${port}`)
})