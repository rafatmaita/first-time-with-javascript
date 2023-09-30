const one =-9*3; //-27 

var tow = "value is" + 50;// value is 50
var therd = 17 % 5;//2
var forr = 5 % 17;//5
var five = 5 / 10;//0.5
var six = (4 == 4);//true
var seven = (4 !== 5);//true
var eight = (7 <= 8);//true
let x = 5.7; 
let result = Math.ceil(x) - Math.floor(x);// Output will be 1, since ceil(5.7) = 6 and floor(5.7) = 5



let userInput = prompt("Please enter a number:");

let number = parseFloat(userInput);

if (!isNaN(number)) {
  alert("You entered the number: " + number);
} else {
  alert("Invalid input. Please enter a valid number.");
}
 



let userInput1 = prompt("Enter the first number:");
let number1 = parseFloat(userInput1);

let userInput2 = prompt("Enter the second number:");
let number2 = parseFloat(userInput2);

if (!isNaN(number1) && !isNaN(number2)) {
  if (number1 < number2) {
    alert(`Ascending order: ${number1}, ${number2}`);
  } else if (number1 > number2) {
    alert(`Ascending order: ${number2}, ${number1}`);
  } else {
    alert("Both numbers are equal.");
  }
} else {
  alert("Invalid input. Please enter valid numbers.");
}



let userInput3 = prompt("Enter the first number:");
let number3 = parseFloat(userInput3);

let userInput4 = prompt("Enter the second number:");
let number4 = parseFloat(userInput4);

if (!isNaN(number3) && !isNaN(number4)) {
  let sum = number3 + number4;

  alert(`The sum of ${number3} and ${number4} is ${sum}`);
} else {
  alert("Invalid input. Please enter valid numbers.");
}


let num = 5; 

switch (num) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  case 4:
    console.log("FOUR");
    break;
  case 5:
    console.log("FIVE");
    break;
  case 6:
    console.log("SIX");
    break;
  case 7:
    console.log("SEVEN");
    break;
  case 8:
    console.log("EIGHT");
    break;
  case 9:
    console.log("NINE");
    break;
  default:
    console.log("PLEASE TRY AGAIN");
    break;
}





