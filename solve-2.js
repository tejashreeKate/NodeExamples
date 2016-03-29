var rect = require('./rectangle-2');

function solverect(l,b){
	rect(l,b,function (err,rectangle){
		if(err){
			console.log(err)
		}
		else{
			console.log("Area of rectangle:"+rectangle.area());
			console.log("Perimeter of rectangle:"+rectangle.perimeter());
		}
	});
};

solverect(3,4)
solverect(-2,4)
