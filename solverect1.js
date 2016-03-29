var rect = require('./rectangle1');


function solveRect(l,b){
	if(l<0 || b<0){
		console.log("Rectangle dimensions should be greater tha zero");

	}
	else{
		console.log("The area of rectangle with dimensions l="+l+" and b="+b+" is:"+rect.area(l,b));
		console.log("The perimeter of rectangle with dimensions l="+l+" and b="+b+" is:"+rect.perimeter(l,b));
	}
};

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);
