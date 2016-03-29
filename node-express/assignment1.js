var customDishRouter = require('./dishRouter');
var express = require('express'),
	morgan = require('morgan'),
	http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

//prints log information to console on server side
app.use(morgan('dev'));


app.use('/dishes',customDishRouter);

//app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
	console.log(`Server started running at http://${hostname}:${port}`)
})