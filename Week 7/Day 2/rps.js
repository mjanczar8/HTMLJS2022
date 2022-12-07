//canvas stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");



//new instances for RPS
var rock = new Image();
var paper = new Image();
var scissors = new Image();
var lizard = new Image();
var spock = new Image();

var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();
var hlizard = new Image();
var hspock = new Image();

rock.src = "images/rock.jpg";
paper.src = "images/paper.jpg";
scissors.src = "images/scissors.jpg";
lizard.src = "images/lizard.jpg";
spock.src = "images/spock.jpg";

hrock.src = "images/rockH.jpg";
hpaper.src = "images/paperH.jpg";
hscissors.src = "images/scissorsH.jpg";
hlizard.src = "images/lizardH.jpg";
hspock.src = "images/spockH.jpg";

var result = "Select a button from above to choose.";

//win loss counter
var win = 0;
var loss = 0;

hspock.onload = function(){
    draw(rock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, spock);
}

document.addEventListener("keydown", keyPressDown);
document.addEventListener("keyup", keyPressUp);

var gameOver = true;

function keyPressDown(e){
    //console.log(e.keyCode);
}

function keyPressUp(e){
    //console.log(e.keyCode);
    if(e.keyCode == 32){
     gameOver = false;
     draw(rock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, spock);

    }
}



function draw(rock, paper, scissors, lizard, spock, crock, cpaper, cscissors, clizard, cspock){
    if(gameOver == true){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.font = "30px Verdana";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText("Welcome! Press Space to Play", canvas.width/2, 100);
        return;
    }


    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "20px Verdana";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Wins: " + win.toString(), canvas.width/2 - 450, 30);
    ctx.fillText("Losses: " + loss.toString(), canvas.width/2 - 440, 50);
    ctx.font = "30px Verdana";
    ctx.fillText("Player Choices", canvas.width/2, 100);
    ctx.drawImage(rock, canvas.width/2 - rock.width/2 -200, 150);    
    ctx.drawImage(paper, canvas.width/2 - paper.width/2 -100, 150);    
    ctx.drawImage(scissors, canvas.width/2 - scissors.width/2, 150);    
    ctx.drawImage(lizard, canvas.width/2 - lizard.width/2 +100, 150);    
    ctx.drawImage(spock, canvas.width/2 - spock.width/2 +200, 150);    

    ctx.fillText("Computer Choices", canvas.width/2, 325);
    ctx.drawImage(crock, canvas.width/2 - crock.width/2 -200, 375);    
    ctx.drawImage(cpaper, canvas.width/2 - cpaper.width/2 -100, 375);    
    ctx.drawImage(cscissors, canvas.width/2 - cscissors.width/2, 375);
    ctx.drawImage(clizard, canvas.width/2 - clizard.width/2 +100, 375);    
    ctx.drawImage(cspock, canvas.width/2 - cspock.width/2 +200, 375);  

    ctx.fillText(result, canvas.width/2, 525);
}



// ctx.font = "40px Cust";
// ctx.fillStyle = "blue"
// ctx.fillText("Welcome to RPS Game!", 200, 280);


// alert('yo');
//Array datatype
// var rps = ['Rock','Paper','Scissors'];
var rps = [];
rps[0] = 'Rock';
rps[1] = 'Paper';
rps[2] = 'Scissors';
rps[3] = 'Lizard';
rps[4] = 'Spock';

document.getElementById('rock').addEventListener('click', function(e){
    //alert('You Clicked ' + rps[0]);
    playGame(rps[0]);
});
document.getElementById('paper').addEventListener('click', function(e){
    //alert('You Clicked ' + rps[1]);
    playGame(rps[1]);
});
document.getElementById('scissors').addEventListener('click', function(e){
    //alert('You Clicked ' + rps[2]);
    playGame(rps[2]);
});
document.getElementById('lizard').addEventListener('click', function(e){
    //alert('You Clicked ' + rps[3]);
    playGame(rps[3]);
});
document.getElementById('spock').addEventListener('click', function(e){
    //alert('You Clicked ' + rps[4]);
    playGame(rps[4]);
});

function playGame(playerChoice){
    if(gameOver == true){
        return;
    }
    var cpuChoice = Math.floor(Math.random() * 4.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        //player rock
        case 'Rock':
            if(cpuChoice == 0){
                //rock
                result = "CPU chose Rock. It's a tie!";
                draw(hrock, paper, scissors, lizard, spock, hrock, paper, scissors, lizard, spock);
            } 
            else if (cpuChoice == 1){
                //paper
                result = "Paper covers Rock. CPU wins!";
                loss += 1;
                draw(hrock, paper, scissors, lizard, spock, rock, hpaper, scissors, lizard, spock);
            }
            else if (cpuChoice == 2){
                //scissors
                result = "Rock breaks Scissors. You win!";
                win += 1;
                draw(hrock, paper, scissors, lizard, spock, rock, paper, hscissors, lizard, spock);
            }
            else if  (cpuChoice == 3){
                //lizard
                win += 1;
                result = "Rock crushes Lizard. You win!";
                draw(hrock, paper, scissors, lizard, spock, rock, paper, scissors, hlizard, spock);
            }
            else{
                //spock
                result = "Spock vaporizes Rock. CPU wins!";
                loss += 1;
                draw(hrock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, hspock);
            }
            break;
        //player paper
        case 'Paper':
            if(cpuChoice == 0){
                //rock
                result = "Paper covers Rock. You win!";
                win += 1;
                draw(rock, hpaper, scissors, lizard, spock, hrock, paper, scissors, lizard, spock);
            } 
            else if(cpuChoice == 1){
                //paper
                result = "CPU chose Paper. It's a tie!";
                draw(rock, hpaper, scissors, lizard, spock, rock, hpaper, scissors, lizard, spock);
            }
            else if(cpuChoice == 2){
                //scissors
                result = "Scissors cut Paper. CPU wins!";
                loss += 1;
                draw(rock, hpaper, scissors, lizard, spock, rock, paper, hscissors, lizard, spock);
            }
            else if(cpuChoice == 3){
                //lizard
                result = "Lizard eats Paper. CPU wins!";
                loss += 1;
                draw(rock, hpaper, scissors, lizard, spock, rock, paper, scissors, hlizard, spock);
            }
            else{
                //spock
                result = "Paper disproves Spock. You win!";
                win += 1;
                draw(rock, hpaper, scissors, lizard, spock, rock, paper, scissors, lizard, hspock);
            }
            break;
        //player paper    
        case 'Scissors':
            if(cpuChoice == 0){
                //rock
                result = "Rock breaks Scissors. CPU wins!";
                loss += 1;
                draw(rock, paper, hscissors, lizard, spock, hrock, paper, scissors, lizard, spock);
            } 
            else if(cpuChoice == 1){
                //paper
                result = "Scissors cut Paper. You win!";
                win += 1;
                draw(rock, paper, hscissors, lizard, spock, rock, hpaper, scissors, lizard, spock);
            }
            else if(cpuChoice == 2){
                //scissors
                result = "CPU chose Scissors. It's a tie!";
                draw(rock, paper, hscissors, lizard, spock, rock, paper, hscissors, lizard, spock);
            }
            else if(cpuChoice == 3){
                //lizard
                result = "Scissors decapitates Lizard. You win!";
                win += 1;
                draw(rock, paper, hscissors, lizard, spock, rock, paper, scissors, hlizard, spock);
            }
            else{
                //spock
                result = "Spock smashes Scissors. CPU wins!";
                loss += 1;
                draw(rock, paper, hscissors, lizard, spock, rock, paper, scissors, lizard, hspock);
            }
            break;
        //player lizard    
        case 'Lizard':
            if(cpuChoice == 0){
                //rock
                result = "Rock crushes Lizard. CPU wins!";
                loss += 1;
                draw(rock, paper, scissors, hlizard, spock, hrock, paper, scissors, lizard, spock);
            } 
            else if(cpuChoice == 1){
                //paper
                result = "Lizard eats Paper. You win!";
                win += 1;
                draw(rock, paper, scissors, hlizard, spock, rock, hpaper, scissors, lizard, spock);
            }
            else if(cpuChoice == 2){
                //scissors
                result = "Scissors decapitates Lizard. CPU wins!";
                loss += 1;
                draw(rock, paper, scissors, hlizard, spock, rock, paper, hscissors, lizard, spock);
            }
            else if(cpuChoice == 3){
                //lizard
                result = "CPU chose Lizard. It's a tie!";
                draw(rock, paper, scissors, hlizard, spock, rock, paper, scissors, hlizard, spock);
            }
            else{
                //spock
                result = "Lizard poisons Spock. You win!";
                win += 1;
                draw(rock, paper, scissors, hlizard, spock, rock, paper, scissors, lizard, hspock);
            }
            break;
        //player lizard    
        case 'Spock':
            if(cpuChoice == 0){
                //rock
                result = "Spock vaporizes Rock. You win!";
                win += 1;
                draw(rock, paper, scissors, lizard, hspock, hrock, paper, scissors, lizard, spock);
            } 
            else if(cpuChoice == 1){
                //paper
                result = "Paper disaproves Spock. CPU wins!";
                loss += 1;
                draw(rock, paper, scissors, lizard, hspock, rock, hpaper, scissors, lizard, spock);
            }
            else if(cpuChoice == 2){
                //scissors
                result = "Spock smashes Scissors. You win!";
                win += 1;
                draw(rock, paper, scissors, lizard, hspock, rock, paper, hscissors, lizard, spock);
            }
            else if(cpuChoice == 3){
                //lizard
                result = "Lizard poisons Spock. CPU wins!";
                loss += 1;
                draw(rock, paper, scissors, lizard, hspock, rock, paper, scissors, hlizard, spock);
            }
            else{
                //spock
                result = "CPU chose Spock. It's a tie!";
                draw(rock, paper, scissors, lizard, hspock, rock, paper, scissors, lizard, hspock);
            }
            break;        
    }
}
