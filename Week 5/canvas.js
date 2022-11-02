// This is a JS comment (line comment)
/* 
this is a multi line comment
yo
yo
*/
//defines var to acess the canvas properties 
var canvas = document.getElementById('canvas');
//defines the drawing context of the canvas
var ctx = canvas.getContext('2d');

//Draw a rectangle

//defines fill color
ctx.fillStyle = 'rgb(0,0,255)';
//defines outline color
ctx.strokeStyle = 'green';
//defines line width
ctx.lineWidth = '5';

//finally draw the rectangle -- fillRect(x,y,width,height)
ctx.fillRect(30,30,200,100);
ctx.strokeRect(30,30,200,100);

//draw a line
ctx.beginPath();
ctx.moveTo(50,0);
ctx.lineTo(400,300);
ctx.lineTo(800,0);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(800,600);
ctx.lineTo(400,350);
ctx.lineTo(0,600);
ctx.stroke();

//draw a circle
ctx.fillStyle = '#55ddef';
ctx.strokeStyle = 'yellow';
ctx.lineWidth = '2';

ctx.beginPath();
ctx.arc(400,300,50,0,(3*Math.PI)/2,false);
ctx.lineTo(400,300);
ctx.closePath();
ctx.fill();
ctx.stroke();

//draw a shape
ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(625,200);
ctx.lineTo(600,140);
ctx.closePath();
ctx.stroke();
ctx.fill();

//draw and image
//create instance of image
var mario = new Image();
mario.scr = "images/mario.png"

mario.onload = function(){
    ctx.drawImage(mario,600,300,400,200)
}


