
let targetNumber = document.getElementById("target number");

let computerGuess = document.getElementById('computer guess');

let winner = document.getElementById('winner');

let playButton = document.getElementById('playButton');

let playAgain = document.getElementById("playAgain");

let randomComputerNumber;

let randomTargetNumber;


//Generates random number between 0 and 9
const getRandomNumber = () =>{
    let randomNumber = Math.floor(Math.random()* 10);
    return randomNumber;
}
 randomTargetNumber = getRandomNumber();
 
 randomComputerNumber = getRandomNumber(); 
//Sets target number in index.html
const setTargetNumber = () =>{
 targetNumber.innerHTML = randomTargetNumber
}

//Sets computer guess number in index.html
const setComputerNumber = () => {
    computerGuess.innerHTML = randomComputerNumber;
}
//Move to new file.//

//Finds how close the guessed number is from the target number
const absDistance = (number, targetNumber) =>{
    let distance = Math.abs(number - targetNumber);
    return distance
}



playButton.addEventListener("click", function (){
   let playerGuess = document.getElementById("playerGuess").value;

   
    setComputerNumber();
    setTargetNumber();
    playerGuess = parseInt(playerGuess);
    
    //Displays play again button
    playAgain.style.display = "block";

   
   let playerAbsValue = absDistance(playerGuess, randomTargetNumber);

   let computerAbsValue = absDistance(randomComputerNumber, randomTargetNumber);

   if(playerAbsValue < computerAbsValue){
   
       return winner.innerHTML = "Player";   

   }else if(playerAbsValue > computerAbsValue){
      
      return winner.innerHTML = "Computer";
   }
   else if(playerAbsValue === computerAbsValue){
      
       return winner.innerHTML = "Tie"; 
   }

   
})


