// Check the number is positive, negative or zero

while (true) {
    var num_1 = (prompt("Enter a number"));
    
    if (num_1 === "" || isNaN(num_1)) {
            alert("You must enter a number");
        }
        else{
            break
        } 
    }
    
    //converting the string input to a number 
var num = Number(num_1);

// check the number is Positive , Negative or Zero
if (num > 0) {
    
    alert(num + " is a Positive number");
}
else if (num < 0) {
    
    alert(num + " is a Negative number");
}
else {
    alert(num + " This is zero");
}


