var express = require('express');
var dishRouter = express.Router();

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
})
.put(function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})
.delete(function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});


module.exports = dishRouter;