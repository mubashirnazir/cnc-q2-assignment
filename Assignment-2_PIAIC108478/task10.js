//Password Match

const pass = ("Allah");

// check use input his/her password or not. it will not go further if the use didnt enter anything.

while(true){
    var adminPass = prompt("Enter your password");
    
    if (adminPass === "") {
        alert("Please Enter your password")
    }else{
        break
    }
}
// no check the password is correct or not

if(adminPass === pass){
    alert("Correct! The password you entered matches the original password");
}else{
    alert("Incorrect password")
}