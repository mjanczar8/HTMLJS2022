var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 58;
var finish = 956;

//car vars
var carPos = 2;
var startFuel = randomNumber( canvas.width, 600);
var fuel = startFuel;
var fuelBarWidth = 512;
var speed = 4;
var gameOver = true;
var carWidth = 50;


//start timer vars
var seconds = 3;
var fps = 165;
var frames = fps;

//game sprites
var carSprite = new Image();
var finishLine = new Image();
var backgroundRace = new Image();
carSprite.src = "images/car.png";
finishLine.src = "images/FinishLine.png";
backgroundRace.src = "images/backgroundRace.png";

backgroundRace.onload = function(){
    main();
}


//add event handler for starting the game
document.addEventListener("keydown", pressSpace);

//add key handler function here
function pressSpace(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }

    if(fuel <= 0){
        restartGame();
    }
}



function main(){
    ctx.clearRect( 0, 0, canvas.width, canvas.height);

    if(gameOver){
        //main menu screen
        ctx.save();
        drawBackground();
        ctx.fillStyle = "black";
        ctx.font = "40px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText("Press [Space] to Start", canvas.width/2, canvas.height/2);
        ctx.fillText("Welcome!", 310, 50);
        ctx.restore();

    }else{
        drawBackground();
        if(!gameOver && seconds > 0){
            runStartTimer();
            drawStartTimer();

        }else{
            if(fuel > 0){
                //update car pos
                carPos += speed;
                fuel -= speed;
            }
        }
        drawStartFinishLines();
        drawCar();
        drawFuelBar();

        if(fuel <= 0 || carPos + carWidth > finish + 50){
            fuel = 0;
            drawResults();
        }
    }
    //refresh main function
    timer = requestAnimationFrame(main);
}

function drawBackground(){
    ctx.drawImage( backgroundRace, 1, 1, 1024, 768);
}

function drawStartFinishLines(){
    //draw start line
    ctx.fillStyle = "black";   
    ctx.fillRect( start, 100, 1, 560);
    //draw finish
    ctx.drawImage( finishLine, finish, 102, 24, 557);

}

function drawCar(){
    //draw car
    ctx.fillStyle = "red";
    // ctx.fillRect( carPos, canvas.height/2, 40, 20);
    ctx.drawImage( carSprite, carPos, canvas.height/2 - 16, carWidth, 20);
}

function drawFuelBar(){
    var currentBarWidth = fuelBarWidth * (fuel/startFuel);
    ctx.fillStyle = "black";
    ctx.fillRect( start, 38, fuelBarWidth, 10);
    ctx.font = "20px Trebuchet MS";
    ctx.fillText("Fuel", start, 34);

    if(fuel > 0){
        ctx.fillStyle = "green";
        ctx.fillRect( start, 38, currentBarWidth, 10);
    }

}

function drawResults(){
    if(carPos + carWidth > finish){
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "40px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText("You made it to the finish... You win!!", canvas.width/2, canvas.height/2);
        ctx.font = "30px Trebuchet MS"
        ctx.fillText("Press any key to restart.", canvas.width/2, canvas.height/2 + 30)
        ctx.restore();
    }else{
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "40px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText("You ran out of fuel... You lose!!", canvas.width/2, canvas.height/2)
        ctx.font = "30px Trebuchet MS"
        ctx.fillText("Press any key to restart.", canvas.width/2, canvas.height/2 + 30)
        ctx.restore();
    }
}
//utility function
function randomNumber( high, low){
    return Math.round(Math.random() * (high-low)+ low);
}

function restartGame(){
    location.reload();
}

function runStartTimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps;
        seconds -= 1;
    }
}

function drawStartTimer(){
    if(seconds > 0){
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "70px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText(seconds, canvas.width/2, canvas.height/2)
        ctx.restore();
    }else{
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "70px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.fillText("GO!", canvas.width/2, canvas.height/2)
        ctx.restore();
    }


}