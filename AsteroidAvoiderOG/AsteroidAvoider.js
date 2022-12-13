var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var gameState = [];
var currentState = 0;

//score vars
var score = 0;
var highScore = 0;

//playership vars
var ship = new PlayerShip() 

//playership
function PlayerShip(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 20;
    this.height = 20;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;

    //callback function
    this.drawShip = function(){
        ctx.save();
        ctx.translate( this.x, this.y);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo( 0, -10);
        ctx.lineTo( 10, 10);
        ctx.lineTo( -10, 10);
        ctx.lineTo( 0, -10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    this.moveShip = function(){
        this.x += this.vx;
        this.y += this.vy;

        //canvas boundry
        //bottom
        if(this.y > canvas.height - this.height/2){
            this.y = canvas.height - this.height/2;
            this.vy = 0;
        }
        //top
        if(this.y < this.height/2){
            this.y = this.height/2;
            this.vy = 0;
        }
        //right
        if(this.x > canvas.width - this.width/2){
            this.x = canvas.width - this.width/2;
            this.vx = 0;
        }
        //left
        if(this.x < this.width/2){
            this.x = this.width/2;
            this.vx = 0;
        }
    }
}

//keypress event listener
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e){

    if(!gameOver){
        if(e.keyCode == 87){
            //ship goes up "W"
            ship.up = true;
        }
        if(e.keyCode == 65){
            //ship goes left "A"
            ship.left = true;
        }
        if(e.keyCode == 68){
            //ship goes right "D"
            ship.right = true;
        }
        if(e.keyCode == 83){
            //ship goes down "S"
            ship.down = true;
        }
    
        //arrow keys
        if(e.keyCode == 38){
            //ship goes up "up"
            ship.up = true;
        }
        if(e.keyCode == 37){
            //ship goes left "left"
            ship.left = true;
        }
        if(e.keyCode == 39){
            //ship goes right "right"
            ship.right = true;
        }
        if(e.keyCode == 40){
            //ship goes down "down"
            ship.down = true;
        }
    }

    if(gameOver){
        if(e.keyCode == 32){
            gameOver = false;
            currentState = 1;
            scoreTimer();
            main();
        }
    }
}

//key up
function pressKeyUp(e){

    if(!gameOver){
        if(e.keyCode == 87){
            //ship goes up "W"
            ship.up = false;
        }
        if(e.keyCode == 65){
            //ship goes left "A"
            ship.left = false;
        }
        if(e.keyCode == 68){
            //ship goes right "D"
            ship.right = false;
        }
        if(e.keyCode == 83){
            //ship goes down "S"
            ship.down = false;
        }
    
        //arrow keys
        if(e.keyCode == 38){
            //ship goes up "up"
            ship.up = false;
        }
        if(e.keyCode == 37){
            //ship goes left "left"
            ship.left = false;
        }
        if(e.keyCode == 39){
            //ship goes right "right"
            ship.right = false;
        }
        if(e.keyCode == 40){
            //ship goes down "down"
            ship.down = false;
        }
    }   
}

//asteroid vars
var numAsteroids = 20;
var asteroids = [];


//class for asteroid objects
function Asteroid(){
    this.radius = randomRange( 15, 2);
    this.x = randomRange( canvas.width - this.radius, this.radius);
    this.y = randomRange( canvas.height - this.radius, this.radius) - canvas.height;
    this.vy = randomRange( 10, 5);
    this.color = "white";
    
    this.drawAsteroid = function(){
        //commands to draw asteroids
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

    }
}

for(var i = 0; i < numAsteroids; i++){
    asteroids[i] = new Asteroid();
}

//utility functions

function randomRange( high, low){
    return Math.random() * ( high - low ) + low;

}

function detectCollision( distance, calcDistance){
    return distance < calcDistance;
}

function scoreTimer(){
    if(!gameOver){
        score++;
        if(score % 5 == 0){
            numAsteroids += 10;
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000);
    }
}


//asteroid game state machine ___________________________________________________________________________________________________________________

//main menu
gameState[0] = function(){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2 - 30);
    ctx.font = "15px Arial";
    ctx.fillText("Press Space to Play", canvas.width/2, canvas.height/2 + 20);
    ctx.restore();
}

//game scene
gameState[1] = function(){

    //draw score to canvas
    ctx.save();
    ctx.font = "15 Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score.toString(), canvas.width -150, 30);
    ctx.restore();
    
    //setup vertical mvmt
    if(ship.up){
        ship.vy = -1;
    }else{
        ship.vy = 3;
    }
    
    //setup horizontal mvmt
    if(ship.left){
        ship.vx = -5;
    }else if(ship.right){
        ship.vx = 5;
    }else{
        ship.vx = 0;
    }

    for(var i = 0; i < asteroids.length; i++){
    
        //distance stuff
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX * dX)+(dY * dY));  

        if(detectCollision( distance, (ship.height/2 + asteroids[i].radius))){
            //alert("hit")
            gameOver = true;
        }

        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].x = randomRange( canvas.width - asteroids[i].radius, asteroids[i].radius);
            asteroids[i].y = randomRange( canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height;
        }
        //draw the asteroids
        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();
    }
    
    //draw ship
    ship.moveShip();
    ship.drawShip();

    //check for asteroids
    while(asteroids.length < numAsteroids){
        //add new asteroids
        asteroids.push(new Asteroid());
    }
    
}

//main game loop
function main(){
    //clear canvas
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    
    gameState[currentState]();

    if(!gameOver){
      timer = requestAnimationFrame(main);    
    }     
}