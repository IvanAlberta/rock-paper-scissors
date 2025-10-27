const choiceList = ['rock', 'paper', 'scissors'];

console.log(choiceList);

let getHumanChoice = function () {
   humanChoice = prompt ("Your choice").toLowerCase();
}


var humanScore = 0;
var computerScore = 0;
let gameRounds = 5;

//getHumanChoice ();
//computerChoice ();

let playRound = function () { 
  do { 
    let randomIndex = Math.floor(Math.random() * choiceList.length);
    let computerChoice = choiceList[randomIndex];
    //console.log(computerChoice);
     getHumanChoice (); 
     //console.log(computerChoice());
        if (humanChoice === computerChoice) { 
        console.log( `It is a tied. You chose: ${humanChoice} and computers's chose: ${computerChoice}`);
        gameRounds--;
        //onsole.log(humanScore, gameRounds, humanChoice);
    }    
 /*   } else if (getHumanChoice !== choiceList) {
        console.log('check spelling');        
   
    } */
     else if ((humanChoice === choiceList[0] && computerChoice === choiceList[2]) ||
               (humanChoice === choiceList[1] && computerChoice === choiceList[0]) ||
               (humanChoice  === choiceList[2] && computerChoice === choiceList[1])) 
        {
        console.log( `You Won. You chose: ${humanChoice} and computers's chose: ${computerChoice}`);
            humanScore++;
            gameRounds--;
            //console.log(humanScore, gameRounds);
          
    }

    else  {
        console.log(`You lose. You chose: ${humanChoice} and computers's chose: ${computerChoice}`);
        computerScore++;
        gameRounds--;
        //console.log(computerScore, gameRounds);
  
}

}  while (gameRounds > 0) ;
}

playRound();

console.log(`score so far: human ${humanScore} and computer ${computerScore}`);


