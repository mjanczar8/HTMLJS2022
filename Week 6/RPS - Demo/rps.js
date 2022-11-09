//canvas stuff
// var canvas = document.getElementById("c");
// var ctx = canvas.getContext("2d");

// ctx.font = "40px Cust";
// ctx.fillText("Welcome to RPS Game!", 200, 280);


// alert('yo');
//Array datatype
// var rps = ['Rock','Paper','Scissors'];
var rps = [];
rps[0] = 'Rock';
rps[1] = 'Paper';
rps[2] = 'Scissors';

document.getElementById('rock').addEventListener('click', function(e){
    alert('You Clicked ' + rps[0]);
    playGame(rps[0]);
});
document.getElementById('paper').addEventListener('click', function(e){
    alert('You Clicked ' + rps[1]);
    playGame(rps[1]);
});
document.getElementById('scissors').addEventListener('click', function(e){
    alert('You Clicked ' + rps[2]);
    playGame(rps[2]);
});

function playGame(playerChoice){
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case 'Rock':
            if(cpuChoice == 0){
                //its a tie
                alert("CPU chose Rock. It's a tie!");
            } 
            else if(cpuChoice == 1){
                alert("CPU chose Paper. CPU wins!")
            }
            else{
                alert("CPU chose Scissors. You win!")
            }
            break;
        case 'Paper':
            if(cpuChoice == 0){
                //its a tie
                alert("CPU chose Rock. You win!");
            } 
            else if(cpuChoice == 1){
                alert("CPU chose Paper. It's a tie!")
            }
            else{
                alert("CPU chose Scissors. CPU wins!")
            }
            break;
        case 'Scissors':
            if(cpuChoice == 0){
                //its a tie
                alert("CPU chose Rock. CPU wins!");
            } 
            else if(cpuChoice == 1){
                alert("CPU chose Paper. You win!")
            }
            else{
                alert("CPU chose Scissors. It's a Tie!")
            }
            break;
    }
}