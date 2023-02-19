// Calculator app

var firstNumber = parseInt(prompt("First Number"));
var secondNumber = parseInt(prompt("second Number"));
var sign = prompt("+ , - , / , * , %");

// console.log(typeof(firstNumber))
// console.log(typeof(secondNumber))
// console.log(typeof(sign))

if (isNaN(firstNumber) || isNaN(secondNumber) ) {
    alert("Please enter only Numbers value to calculate");
} 

else if (sign === "+") {
    alert("Your answer is: \n"+ firstNumber + " + " + secondNumber + "\n" + "= "+(firstNumber + secondNumber));
}
else if (sign === "-") {
    alert("Your answer is: \n"+ firstNumber + " - " + secondNumber + "\n" + "= "+ (firstNumber - secondNumber));
}

else if (sign === "*") {
    alert("Your answer is: \n"+ firstNumber + " * " + secondNumber + "\n" + "= "+ (firstNumber * secondNumber));     
}
else if (sign === "/") {
    if(firstNumber === 0 || secondNumber === 0){
        alert("Cannot divide by zero")
    }
    alert("Your answer is: \n"+ firstNumber + " / " + secondNumber + "\n" + "= "+ (firstNumber / secondNumber));
}
else if (sign === "%") {
    if(firstNumber === 0 || secondNumber === 0){
        alert("Please enter the value above zero")
    }
    alert("Your answer is: \n"+ firstNumber + " Percentage of " + secondNumber + "\n" + "= "+ (parseInt(100*(firstNumber / secondNumber))) + "%");
}
