const choices = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    // Math.floor gives integer by rounding off integer
    // Math.random gives a random integer
    // choices. length gives random the num of items in array 
    // choice[ComputerChoice] = array * [random number generated]
    let ComputerChoice=(Math.floor(Math.random() * choices.length));

    return choices[ComputerChoice].toLowerCase();
}


function getUserChoice(){
    let personChoice = prompt("Choose Rock, Paper or Scissors");
    
    return personChoice.toLowerCase()
}


function playRound(userSelection, computerSelection) {
    if (userSelection == computerSelection){
        return "Draw"
    }else if (userSelection != computerSelection){
        switch (userSelection){
            case 'rock': 
            if (computerSelection == 'paper'){
                return "User loses" ;
            } else {
                return "User wins"
            }

            case 'paper':
                if (computerSelection == 'scissors'){
                    return "User loses" ;
            } else {
                return "User wins"
            }
               
            case 'scissors':
                if (computerSelection == 'rock'){
                    return "User loses" ;
            } else {
                return "User wins";
            }
        }
        
    }

}



function playGame(){
    let UserScore = 0;
    let ComputerScore = 0;
    for(let i = 0; i < 5; i++){
    let GameOutcome = playRound(getUserChoice(),getComputerChoice());
    console.log(GameOutcome);
            if (GameOutcome == "User loses"){
            ComputerScore++;
            console.log("Computer score", ComputerScore);
            } else if (GameOutcome != "Draw") {
            UserScore++;
            console.log("User score", UserScore);
            }
    }
    
}

playGame();


