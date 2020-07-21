var data1 = 10;
var data2 = "10";

console.log();
parseInt("10");

if (data1 === data2) {

    console.log("The condition was true");
} else {

}



var isItTrue = (data1 == data2) ? 20 : 9;

console.log(isItTrue);

function sayHelloThreeTimes() {
    console.log("hello");
    console.log("hello");
    console.log("hello");

}

sayHelloThreeTimes();
console.log("How are you doing");
sayHelloThreeTimes();
sayHelloThreeTimes();



function  recursiveFunction() {

    recursiveFunction();s
}
 // Loops START
 console.log("Loops Section");

// for (iterator; condition; increment) { code block }

for (var i = 0; i < 20; i = i + 1) {

    var text = "Loop number " + (i + 1);
    
    if (i % 2 === 0) {
        console.log(text);

    }
    
    
}
console.log("second loop");
for (var i = 0; i < 20; i = i + 2) {

    console.log("loop number " + (i +1));s
}