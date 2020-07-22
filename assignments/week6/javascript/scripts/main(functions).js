// Functions

var mySpecialNumber = 8;

 function myFunction() {
    var response = prompt("How are you today?");

    if (response === "") {
        alert("You did not type anything in!");
        return false;

    } else {
        console.log(response);
        return true;
    }

     
 }


var didTheyRead = myFunction();

while (didTheyRead === false ) {
     didTheyRead = myFunction();
}


 
   


//ANY INFORMATION THAT ENTERS JAVASCRIPT FROM HTML OR CSS WILL BE THE DATATYPE OF STRING, REGARDLESS OF CONTENT.

