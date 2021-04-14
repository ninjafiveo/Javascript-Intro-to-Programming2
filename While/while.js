// Setup
var myArray = [];

// Only change code below this line
var i = 0;

//#region myFunction() normal order
function myFunction(){
    theNumber = document.getElementById("numb").value;
    if(theNumber > i){
        while(i < theNumber) {
            myArray.push(" " + i);
            document.getElementById("response").innerHTML = myArray;
            i++;
        };
        console.log(myArray);
    }else if(i>theNumber){
        while(i > theNumber) {
            myArray.push(" " + i);
            document.getElementById("response").innerHTML = myArray;
            i--;
        };
        console.log(myArray);
    }else{
        document.getElementById("response").innerHTML = "You either entered 0 or not a number.";
        console.log(myArray);
    }
    myArray = [];
    console.log(myArray);
}
//#endregion

//#region reverseFunction() - Count to Zero
function reverseFunction(){
    theNumber = document.getElementById("numb").value;
    console.log(theNumber);
    if(theNumber > i){
        while(theNumber > -1) {
            myArray.push(" " + theNumber);
            document.getElementById("response").innerHTML = myArray;
            theNumber--;
        };
        console.log(myArray);
    }else if(theNumber<i){
        while(theNumber < 1) {
            myArray.push(" " + theNumber);
            document.getElementById("response").innerHTML = myArray;
            theNumber++;
        };
        console.log(myArray);
    }else{
        document.getElementById("response").innerHTML = "You either entered 0 or not a number.";
        console.log(myArray);
    }
    myArray = [];
    console.log(myArray);
}
//#endregion

//#region  CLEAR FUNCTIONS
function clearFunction(){
    myArray = [];
    location.reload()
    document.getElementById("response").innerHTML = myArray;
}
//#endregion