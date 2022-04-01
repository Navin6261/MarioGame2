var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// drawing the lines

ctx.moveTo(0, 0);
ctx.lineTo(200, 200);

var ctx1 = c.getContext("2d");
ctx1.moveTo(200, 0);
ctx1.lineTo(0, 200);

var ctx2 = c.getContext("2d");
ctx2.moveTo(0, 100);
ctx2.lineTo(200, 100);

var ctx3 = c.getContext("2d");
ctx3.moveTo(100, 0);
ctx3.lineTo(100, 200);
ctx.stroke();

// drawing the circles

var circle = document.getElementById("myCanvas").getContext("2d");
circle.beginPath();
circle.arc(100, 0, 100, 0, 2*Math.PI);
circle.stroke();

var circle1 = document.getElementById("myCanvas").getContext("2d");
circle1.beginPath();
circle1.arc(0, 100, 100, 0,  2*Math.PI);
circle1.stroke();

var circle2 = document.getElementById("myCanvas").getContext("2d");
circle2.beginPath();
circle2.arc(200, 100, 100, 0,  2*Math.PI);
circle2.stroke();

var circle2 = document.getElementById("myCanvas").getContext("2d");
circle2.beginPath();
circle2.arc(100, 200, 100, 0,  2*Math.PI);
circle2.stroke();