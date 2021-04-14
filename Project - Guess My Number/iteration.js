let totalGuesses = 0;
let numberCorrect = 0;
document.getElementById("submitBtn").disabled = true;
var allGuesses = []
var playerScore = 0;

function randomNumberGenerator(randomNumber){
    var randomNumber = Math.floor(Math.random() * 10)+1;
    console.log("The Random Number is " + randomNumber);
    return randomNumber
}
// randomNumber = randomNumberGenerator();

function startFunction(){
    randomNumber = randomNumberGenerator();
    document.getElementById("submitBtn").disabled = false;
    totalGuesses = 0;
    // var randomNumber = Math.floor(Math.random() * 10)+1;
    text = ""
    document.getElementById("response").innerHTML = text;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("yourGuess").innerHTML = "";
    allGuesses = [];
}

function myFunction(){
    var playerGuesses, text;
    playerGuesses = document.getElementById("numb").value;
    if(totalGuesses >=20){
        alert("Too many tries... you lose. :(");
        document.getElementById("submitBtn").disabled = true;

    }
        if(playerGuesses<1 || playerGuesses>10){
            text = "Whoa... I need you to enter a number between 1 & 10."
            document.getElementById("response").innerHTML = text;
        }else if(playerGuesses == randomNumber){
            text = "Wow Good Guesser";
            document.getElementById("response").innerHTML = text;
            document.getElementById("answer").innerHTML = "The Number I chose was " + randomNumber;
            document.getElementById("yourGuess").innerHTML = "You chose " + playerGuesses;
            alert("Yeah! That was correct! Play Again? Press Play Again");
            document.getElementById("submitBtn").disabled = true;
            document.getElementById("startBtn").innerHTML = "Play Again";
            ++numberCorrect;
            document.getElementById("numberCorrect").innerHTML = numberCorrect;
            playerScore = playerScore + 5;

        }
        else{
            text = "Noperino. Try again."
            document.getElementById("response").innerHTML = text;
            document.getElementById("answer").innerHTML = "The Number I chose was " + randomNumber;
            document.getElementById("yourGuess").innerHTML = "You chose " + playerGuesses;
            playerScore = playerScore - 2;
        };
++totalGuesses;
console.log(totalGuesses);

//#region Part 3 Array
allGuesses.push(playerGuesses);
//Note: Made a global variable of "allGuesses"
document.getElementById("numbersGuessed").innerHTML = allGuesses;
//#endregion

//#region Part 4 Score Challenge
// playerScore added as global variable.
// if correct added playerScore = playerScore +5;
document.getElementById("playerScore").innerHTML = playerScore;
//#endregion
}





