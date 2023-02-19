// Prompt the user for input until they enter valid marks
while (true) {
    var english = parseInt(prompt("English- Enter your marks between 0 - 100"));
    var math = parseInt(prompt("Math- Enter your marks between 0 - 100"));
    var phy = parseInt(prompt("Physics- Enter your marks between 0 - 100"));

  // Validate the user must input only numbers and also between 0 to 100.
    if (isNaN(english) || isNaN(math) || isNaN(phy) ||
        english < 0 || english > 100 || math < 0 || math > 100 || phy < 0 || phy > 100) {
      console.log("Please enter valid marks (between 0 and 100).");
    } else {
      break; // when condition is true the loop will be break.
    }
}
// Calculate the student obtained marks and percentage
  var studentMarks = english + math + phy;

  var percent = parseInt(100*(studentMarks/300)); 
    // var percent = Math.round(100*(studentMarks/300));
    
    // calculate the percentage of the student from above stored information.
    if (studentMarks <= 300 && studentMarks >=240) {
        console.log("MARK SHEET\n"+"Total Marks: 300\n"+"Marks Obtained: " + studentMarks + "\n" + "Percentage: " + percent + "\nGrade: A-one\nRemarks: Excellent");
    }
    else if (studentMarks <= 300 && studentMarks >= 210) {
        console.log("MARK SHEET\n"+"Total Marks: 300\n"+"Marks Obtained: " + studentMarks + "\n" + "Percentage: " + percent + "\nGrade: A\nRemarks: Good");
    }
    else if (studentMarks <= 300 && studentMarks >= 180) {
        console.log("MARK SHEET\n"+"Total Marks: 300\n"+"Marks Obtained: " + studentMarks + "\n" + "Percentage: " + percent + "\nGrade: B\nRemarks: You need to improve");
    }
    else if(studentMarks <= 300 && studentMarks < 180){
        console.log("MARK SHEET\n"+"Total Marks: 300\n"+"Marks Obtained: " + studentMarks + "\n" + "Percentage: " + percent + "\nGrade: Fail\nRemarks: Sorry");
    }
    else{
        console.log("Please do not exceed from 300. Try again");
    }

