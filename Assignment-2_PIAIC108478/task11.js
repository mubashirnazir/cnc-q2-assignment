// Time checks

while(true){
    var time = prompt("What is the time on your watch - 24 hour format");
    
    if (time === "") {
        alert("Please Enter 24 hours time format")
    }
    else{
        break
    }
}

if (time >= 0000 && time < 1200) {
    alert("Good morning!")
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!")
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!")
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night!")
}
else{
    alert("Try again")
}

