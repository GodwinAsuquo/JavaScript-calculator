const startCalculator = false;
while(!startCalculator){
let operator = prompt("Please enter operation you want to perform (+,-,/,*)");


if(operator === "+" || operator === "-" || operator === "/" || operator === "*") {
const a = parseInt(prompt ('Please input first number'));
const b = parseInt(prompt ('Please input second number'));

let answer;
    if(operator === "+"){
      if (isNaN(a) || isNaN(b)){
         alert("Invalid number inputed. Please try again")
      } else{
         answer = a + b;
         alert (answer)
      }
       
    }
    else if(operator === "-"){
      if (isNaN(a) || isNaN(b)){
         alert("Invalid number inputed. Please try again")
      } else{
         answer = a - b;
         alert (answer)
      }
    }
    else if(operator === "*"){
      if (isNaN(a) || isNaN(b)){
         alert("Invalid number inputed. Please try again")
      } else{
         answer = a * b;
         alert (answer)
      }
    }
    else if(operator === "/"){
      if (isNaN(a) || isNaN(b)){
         alert("Invalid number inputed. Please try again")
      } else{
         answer = a / b;
         alert (answer)
      }
    }

}
else{
alert("Invalid Operator inputed. Please try again.")
}
 
const calculateAgain = prompt("Do you want to perform another operation (y/n)")
if (calculateAgain == "y"){
   continue;
} else{
   break;
}
}
