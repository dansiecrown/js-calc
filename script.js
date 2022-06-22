//Take inputs
let num1 = parseInt(prompt("Please enter first number"), 10);
let operator = prompt("Please select an operand (+, -, /, *)")
let num2 = parseInt(prompt("Please enter second number"), 10);
let result



//Using the operator the determine operation
if (operator == "+"){
    result = num1 + num2;
}
else if (operator == "-"){
    result = num1 - num2;
}
else if(operator == "*"){
    result = num1 * num2;
} else if (operator == "/"){
    result = num1 * num2;
}else {
    alert(`${operator} not a valid operator`)
}

//Display result
alert(`${num1} ${operator} ${num2} = ${result}`);



//For DOM
let results = document.getElementById("result");

function seeResult(){
    results.innerHTML = result;
    console.log(result)
}