var oneValue = 800;

 oneValue = 500;

//An Javascript Array is described using the square brackets symbols, and each value within should be split by a comma except for the last value.
 var days = [
     "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

var randomArray = [100, "hello", true];

var multiDimensionalArray = [
    [10, 20],
    [100,200]

];

console.log(days[3]);
console.log(days[5]);

days[2] = "whensday";

console.log(days);

function addArrays(array1, array2) {

    var newArray = [ 
    array1[0] + array2[0],
    array1[1] + array2[1]
]
   return newArray;

}

var firstArray = [1, 10];
var secondArray = [9, 90];
var sumArray = addArrays(firstArray, secondArray);

console.log(sumArray);