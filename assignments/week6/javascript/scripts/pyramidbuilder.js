


function pyramidBuilder(pyramidHeight,pyramidSpeed) {

var asteriskString = "";

var RemovalCount = pyramidSpeed.length;


for (var counter = 0; counter < pyramidHeight; counter++) {

    
    asteriskString = asteriskString + pyramidSpeed;
    console.log(asteriskString);
}


for (var i = 0; i < pyramidHeight - 1; i = i + 1) {
   

    var exArray = asteriskString.split("");
    
    for (var e = 0; e < RemovalCount; e++) {

        exArray.pop();
    }

    
    asteriskString = exArray.join("");
    console.log(asteriskString);

}

}
for(var i =0; i < 100; i ++) {
var randomNumberWithDecimal = (Math.random() * 50) + 2;
var myRandomNumber = Math.floor(randomNumberWithDecimal);

pyramidBuilder(myRandomNumber, "*");

}