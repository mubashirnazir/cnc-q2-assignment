var a=2, b=1;
document.write("a is: "+a + "<br>");
document.write("b is: "+b + "<br>");
var result= --a - --b  + ++b;
document.write("Result is : " + result);
// This is a prefix in decrement (--a) in this stage 1 decreases from a,
// --a - --b (a=1 minus b=0) result is 1
// --a - --b + ++b (a=1 minus b=0 plus b=1)  1 increment into b now b=1