// Check Even or Odd numbers 


var number = parseInt(prompt(" Enter any number here"));

if (isNaN(number)) {
    alert("Please enter only Numbers")
}
else{
    var rNumber = (number % 2);

    if (rNumber == 0 ) {
        alert(number + " It is an even number");

    }else if(rNumber != 0){
        alert(number + " It is an odd number");
    }
}