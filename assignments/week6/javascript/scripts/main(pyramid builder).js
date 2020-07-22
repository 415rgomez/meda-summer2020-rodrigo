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
var pyramidSpeed = "****";
var pyramidHeight = 10;



for (var counter = 0; counter < pyramidHeight; counter ++) {

    
    
    console.log(asteriskString);

    asteriskString = asteriskString + pyramidSpeed;
}