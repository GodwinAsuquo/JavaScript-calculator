

let operator = prompt("Please enter operation you want to perform");
const a = parseInt(prompt ('Please input first number'));
const b = parseInt(prompt ('Please input second number'));

    if(operator === "+"){
        let answer = a + b;
       console.log(answer);
    }
    else if(operator === "-"){
        console.log(a - b);
    }
    else if(operator === "*"){
       console.log(a * b)
    }
    else if(operator === "/"){
       console.log(a / b)
    }
     else {console.log("Please enter the required inputs")
}



