//Guess Game
var secretNumber = 7;

    var guessNumber = parseInt(prompt("Guess the secret number from 1 to 10"));
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 10) {
        console.log("Please guess the numbers from 1 to 10");
    } else {
  
    }

if (secretNumber === guessNumber ) {
    console.log("Bingo! Correct answer");
}else if(guessNumber  === secretNumber+1){
    console.log("Close enough to the correct answer");
}else{
    console.log("Wrong answer, try again...")
}
