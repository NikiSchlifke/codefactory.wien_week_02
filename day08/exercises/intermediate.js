var text = "With the online map of Vienna you can easily navigate through Vienna.";



var words = text.split(' ');
var first = words[5];
var second = words[11];

document.write(first + "<br />" + second.substring(0, 6) + "<br />")


var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var sum = a + b + Number(c) + Number(d) + e;

document.write(sum + "<br />");


var f = '1';
var g = 15;
var h = 8;
var f = "1";

var product = Number(f) * g * h;
document.write(product + "<br />");

/*
function multiply(a,b,c)
{
	return Number(a)*Number(b)*Number(c);
}

document.write(multiply(f,g,h) + "<br />");
*/

var quotient = sum / product;
document.write(quotient + "<br />");

var data = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];

var output = [];

output.push(data[1][1]);
output.push(data[4][2]);
output.push(data[5][3]);
output.push(data[1][1]);
output.push(data[2][1]);

document.write(output.join(','));