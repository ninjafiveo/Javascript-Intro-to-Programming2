// Setup
var myArray = [];

// Only change code below this line
var i = 0;
var text = "";

//#region myFunction() normal order
function myFunction(){
    theNumber = document.getElementById("numb").value;
    do{
        text +="<br> Hello There. You missed "+ i + " times."
        i++
    }while(i < theNumber)
    document.getElementById('response').innerHTML = text;
}
//#endregion

//#region  CLEAR FUNCTIONS
function clearFunction(){
    myArray = [];
    location.reload()
    document.getElementById("response").innerHTML = myArray;
}
//#endregion