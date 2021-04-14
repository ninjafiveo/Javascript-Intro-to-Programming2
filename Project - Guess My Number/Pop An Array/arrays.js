var allGuesses = []
var playerScore = 0;

//#region Generate a random number and return it.
function randomNumberGenerator(randomNumber){
    var randomNumber = Math.floor(Math.random() * 10)+1;
    console.log("The Random Number is " + randomNumber);
    document.getElementById("theRandomNumber").innerHTML = "The Number Is: " + randomNumber;
    return randomNumber
}
randomNumber = randomNumberGenerator();
//#endregion


function myFunction(){
    var playerGuesses;
    playerGuesses = document.getElementById("input").value;
    //#region Bonus, removing duplicate guesses in array. 
    //BONUS... what if the user already guessed the number?
    if(allGuesses.includes(playerGuesses)){
        console.log("You've already guessed that number");
        document.getElementById("duplicateNumber").innerHTML = "You've Already Guessed That Number!!!";
        allGuesses.pop();
    }else{
        document.getElementById("duplicateNumber").innerHTML = "";
    };
       //#endregion 
    console.log("Player guesses: " + playerGuesses);
    if(playerGuesses == randomNumber){
            text = "Score Counter Going Up";
            document.getElementById("message").innerHTML = text;
            playerScore = playerScore + 5;
        }
        else{
            text = "Score Going Down"
            document.getElementById("message").innerHTML = text;
            playerScore = playerScore - 2;


        };

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

};





