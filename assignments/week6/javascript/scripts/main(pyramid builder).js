/*

*
**
***
****
*****
****
***
**
*

*/
Math.random();
Math.ceil();
Math.floor();
Math.round();

var randomNumberWithDecimal = (Math.random() * 10) + 1;
var myRandomNumber = Math.floor(randomNumberWithDecimal);

console.log(myRandomNumber);


console.log("*");
console.log("**");
console.log("***");
console.log("**");
console.log("*");


var asteriskString = "*";
var pyramidSpeed = "*";
var pyramidHeight = 5;



for (var counter = 0; counter < pyramidHeight; counter ++) {

    
    
    console.log(asteriskString);

    asteriskString = asteriskString + pyramidSpeed;
}


//"*****"

var exampleString = "*****";
var exampleArray;

exampleArray = exampleString.split("");

//console.log(exampleArray);

exampleArray.pop();

//console.log(exampleArray);

var updatedString = exampleArray.join("");

console.log(updatedString);


var exString = "**********";
for (var i = 0; i < 10; i = i + 1) {
   

    var exArray = exString.split("");
    exArray.pop();

    exString = exArray.join("");
    console.log(exString);

}