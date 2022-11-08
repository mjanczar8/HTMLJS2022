var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var timer = requestAnimationFrame(main);
var x = 300;
var y = 300;
var radius = 50;
var speed = 2;
var speedX = speed;
var speedY = speed;

//loading image sprites
var mario = new Image();
mario.src = 'images/mario.png';
mario.onload = function(){
    main();
}

var bg = new Image();
bg.scr = 'images/space.jpeg';
bg.onload = function(){
    main();
}

function main(){
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawCircle("lightblue", x, y, radius);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(mario, x - radius, y - radius, 100, 100);

    //update the position of the object
    x += speedX;
    y += speedY;

    createCanvasBoundry(x, canvas.width, radius, 'speedX')
    createCanvasBoundry(y, canvas.height, radius, 'speedY')

    //update the animation frame
    timer = requestAnimationFrame(main);
    // console.log(x)
}

function drawCircle(color, posX, posY, radius){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
}

function createCanvasBoundry(position, canvasSize, objectRadius, direction){
        //create condition for when the object is off screen
        if(position > canvasSize - objectRadius || position < objectRadius){
            if(direction == 'speedX'){
            speedX *= -1
            }
            else{
                speedY *= -1
            }
        }
}