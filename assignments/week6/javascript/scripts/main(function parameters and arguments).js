function addNumber() {
    var number1 = 10;
    var number2 = 100;

    var sum = number1 + number2;

    return sum;
}

var myNumber = addNumber();
var myNumber2 = addNumber();

addNumber();


//Function Arguments and Parameters
// Parameters are Function Variables

function myFunction(myFunctionVariable, mysecondFunctionvariable) {

    console.log(myFunctionVariable);
}

// Arguments are the values for the Parameters 

function mathify(num1, num2) {
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;

    console.log(sum, difference, product, quotient);

}

mathify(90, 100);
mathify(8, 10);
mathify(1, 70);


function caTax(priceTotal) {
    var tax = priceTotal * .085;
    var totalExpense = priceTotal + tax;

    return totalExpense;
}

function writeSentence(priceTotal) {



console.log("The total for a $ " + priceTotal + " purchase is $ " + caTax(priceTotal));

}

writeSentence(85);
writeSentence(1100);
writeSentence(13);