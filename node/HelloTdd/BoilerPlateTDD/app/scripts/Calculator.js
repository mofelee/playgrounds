var Calculator  = {}; //new object
Calculator.add= function(a,b) //add function
{
	a = isNumber(a) ? parseFloat(a) : 0;
	b = isNumber(b) ? parseFloat(b) : 0;
	return (a+b);
};

Calculator.substract= function(a,b) //substract function
{
	a = isNumber(a) ? parseFloat(a) : 0;
	b = isNumber(b) ? parseFloat(b) : 0;
	return (a-b);
};

Calculator.multiply= function(a,b) //substract function
{
	a = isNumber(a) ? parseFloat(a) : 0;
	b = isNumber(b) ? parseFloat(b) : 0;
	return (a*b);
};


function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}