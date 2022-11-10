var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//square
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'black';
ctx.lineWidth = '5';

ctx.fillRect(85,300,100,100);
ctx.strokeRect(85,300,100,100);


//circle
ctx.fillStyle = '#ffff00';
ctx.strokeStyle = 'red';
ctx.lineWidth = '5';

ctx.beginPath();
ctx.arc(385,441,65,0,(4*Math.PI)/1,);
ctx.closePath();
ctx.fill();
ctx.stroke();


//line
ctx.strokeStyle = 'rgb(255,0,0)'
ctx.lineWidth = '5'

ctx.beginPath();
ctx.moveTo(85,682);
ctx.lineTo(280,550);
ctx.stroke();


//pentagon
ctx.fillStyle = '#ff00ff';
ctx.strokeStyle = '#00ffff';
ctx.lineWidth = '5';

ctx.beginPath();
ctx.moveTo(555,310);
ctx.lineTo(665,285);
ctx.lineTo(725,380);
ctx.lineTo(650,465);
ctx.lineTo(545,420);
ctx.closePath();
ctx.stroke();
ctx.fill();


//star
ctx.fillStyle = '#ffff00';
ctx.strokeStyle = 'rgb(32,32,32)';
ctx.lineWidth = '5';

ctx.beginPath();
ctx.moveTo(635,495);
ctx.lineTo(670,555);
ctx.lineTo(735,567);
ctx.lineTo(690,615);
ctx.lineTo(695,680);
ctx.lineTo(635,650);
ctx.lineTo(575,680);
ctx.lineTo(585,615);
ctx.lineTo(540,567);
ctx.lineTo(605,555);
ctx.closePath();
ctx.stroke();
ctx.fill();






