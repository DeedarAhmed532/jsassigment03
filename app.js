// js math 

var num1 = 3
var num2 = 5

var plus = num1 + num2
var sub = num1 - num2
var multiple = num1 * num2
var division = num1 / num2

document.write("A" + "<br>" + plus + "<br>" + sub + "<br>" + multiple + "<br>" + division)



var num1 = prompt("write the first number who you be multiply  ")
var num2 = prompt("write the second number")
var multiple = (num1 * num2)
document.write("<h2>multiple of " + num1 + " and " + num2 + " is " + multiple + " <br> </h2> ")



var opr = prompt("chose your oppertor like + , -, * , /")
var num1 = prompt("write the first number")
var num2 = prompt("write the second number")
if (opr == "+") {
    document.write(num1 + num2)
}
else if (opr == "-") {
    document.write(num1 - num2)
}
else if (opr == "*") {
    document.write(num1 * num2)
}
else if (opr == "/") {
    document.write(num1 / num2)
}
else {
    alert("please chose any operator or number ")
}
