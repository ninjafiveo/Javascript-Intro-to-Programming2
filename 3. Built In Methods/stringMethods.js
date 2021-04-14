// https://www.w3schools.com/js/js_string_methods.asp
// https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

// .length


var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("indexOf").innerHTML = pos;
// ^^^ should return "7" because that is the character location that Locate begins


// .charAt()
// Returns the character at the specified index.


// .charCodeAt()
// Returns a number indicating the Unicode value of the character at the given index.

// .concat()
// Combines the text of two strings and returns a new string.

// .indexOf
// Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

// .lastIndexOf()
// Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

// .toUpperCase()
// .toLowerCase()
var sayHello = "Hello Ninja";
document.getElementById("toLowerCase").innerHTML = sayHello.toLowerCase();
document.getElementById("toUpperCase").innerHTML = sayHello.toUpperCase().fontcolor("red").fontsize(20);

// .length()
// Returns the length of the string.
function myLength() {
    var sentenceInput = document.getElementById("sentence").value;
    var sentenceLength = sentenceInput.length;
    document.getElementById("theLength").innerHTML = sentenceLength;
    console.log(sentenceInput)

    // .replace()
    // Used to find a match between a regular expression and a string, and to replace the matched // substring with a new substring.
    var wordReplacement = sentenceInput.replace("Ninja", "Samurai");
    document.getElementById("replaceWord").innerHTML = wordReplacement;

    // .match()
    // Used to match a regular expression against a string.
    var wordMatch = sentenceInput.match(/in/g);
    document.getElementById("matchWord").innerHTML = wordMatch;
    document.getElementById("matchLength").innerHTML = wordMatch.length; // You can check the count of them. 

    }





// .search()
// Executes the search for a match between a regular expression and a specified string.

// .slice()
// Extracts a section of a string and returns a new string.

// .split()
// Splits a String object into an array of strings by separating the string into substrings.

// .substr()
// Returns the characters in a string beginning at the specified location through the specified number of characters.

// .substring()
// Returns the characters in a string between two indexes into the string.

// .toLocaleLowerCase()
// The characters within a string are converted to lower case while respecting the current locale.

// .toLocaleUpperCase()
// The characters within a string are converted to upper case while respecting the current locale.


// .toString()
// Returns a string representing the specified object.

// .valueOf()
// Returns the primitive value of the specified object.




// var ninja = document.getElementById("toLowerCase").value;







