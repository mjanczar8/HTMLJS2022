//Canvas
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//RPS Instances
var rock = new Image();
var paper = new Image();
var scissors = new Image();
var spock = new Image();
var lizard = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();
var hspock = new Image();
var hlizard = new Image();

rock.src = "images/Rock.png";
paper.src = "images/Paper.png";
scissors.src = "images/scissors.png";
spock.src = "images/Spock.png";
lizard.src = "images/Lizard.png";
hrock.src = "images/RockH.png";
hpaper.src = "images/PaperH.png";
hscissors.src = "images/ScissorsH.png";
hspock.src = "images/SpockH.png";
hlizard.src = "images/LizardH";


var result = "Select a button from above to choose.";

hscissors.onload = function(){
    draw(rock, paper, scissors, rock, paper, scissors,);
}

document.addEventListener("keydown", keyPressDown);
document.addEventListener("keyup", keyPressUp);

var gameOver = true;

function keyPressDown(e){
    console.log(e.keyCode);
}

function keyPressUp(e){
    console.log(e.keyCode);
    if(e.keyCode == 32){
     gameOver = false;
     draw(rock, paper, scissors, rock, paper, scissors,);

    }
}

function draw(rock, paper, scissors, spcok, lizard, hrock, hpaper, hscissors, hspock, hlizard){
    if(gameOver == true){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText("Welcome! Press Space to Play", canvas.width/2, 100);
        return;
    }


    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("Player Choices", canvas.width/2, 100);
    ctx.drawImage(rock, canvas.width/2 - rock.width/2 -100, 150);    
    ctx.drawImage(paper, canvas.width/2 - paper.width/2, 150);    
    ctx.drawImage(scissors, canvas.width/2 - scissors.width/2 +100, 150);    

    ctx.fillText("Computer Choices", canvas.width/2, 325);
    ctx.drawImage(hrock, canvas.width/2 - rock.width/2 -100, 375);    
    ctx.drawImage(hpaper, canvas.width/2 - paper.width/2, 375);    
    ctx.drawImage(hscissors, canvas.width/2 - scissors.width/2 +100, 375);

    ctx.fillText(result, canvas.width/2, 525);
}



