const display = document.querySelector(".displayScreen");
const numbers = document.querySelectorAll(".num");
const proces = document.querySelectorAll(".proces");
const deleteBtn = document.querySelector(".delete");
const deleteEverythingBtn = document.querySelector(".deleteEverything");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");

let num1 = "";
let num2 = "";
let operator = "";
let equalUsed = false;
let operatorUsed = false;
let result = 0;

numbers.forEach((number) => {
    number.addEventListener('click', function () {
        if (isNaN(parseInt(display.textContent))) {
            display.textContent = "";
        }
        if (equalUsed === true) {
            display.textContent = "";
            num1 = "";
            equalUsed = false;
        }
        if (operatorUsed === true) {
            display.textContent = "";
            operatorUsed = false;
        }
        
        display.textContent += number.textContent;
        if (operator === "") {
            num1 += number.textContent;
            console.log(num1);
        } else {
            num2 += number.textContent; 
        }
    })
});

proces.forEach((sign) => {
    sign.addEventListener('click', function() {
        // if (typeof display.textContent === 'string') {
        //     display.textContent = "";
        // }
        if (equalUsed === true) {
            equalUsed = false;
        }
        if (operator === "" && num1 !== "") {
            // display.textContent = '';
            operator += sign.textContent;
            // display.textContent += sign.textContent;
            console.log(num1); //debugging
            console.log(num2); //debugging
            operatorUsed = true;
        } else if (num1 === "" || num2 === "") {
            //do nothing
        } else {
            // display.textContent = '';
            operate(num1, num2, operator);
            // display.textContent += sign.textContent;
            operator = sign.textContent;
            operatorUsed = true;
        }
    })
})

dot.addEventListener('click', function() {
    if (display.textContent != "") {
        if (operator == "" && !num1.includes(".")) {
            display.textContent += "."
            num1 += ".";
        } else if (operator != "" && !num2.includes(".") && num2 != "") {
            display.textContent += "."
            num2 += ".";
        }
    }
})

function sum(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}

function devide(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
}

function multiply(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
}

function substract(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
}

equal.addEventListener('click', function() {
    if (num1 != '' && num2 != '') {
        operate(num1, num2, operator);
        equalUsed = true
    }
})

function operate(n1, n2, sign) {
    if (sign == "+") {
        result = sum(n1, n2);
        console.log(result)
    } else if (sign == "-") {
        result = substract(n1, n2);
        console.log(result)
    } else if (sign == "/") {
        result = devide(n1, n2);
        console.log(result)
    } else if (sign == "*") {
        result = multiply(n1, n2);
        console.log(result)
    }
    num1 = (Math.round(result *10) / 10).toString();
    operator = "";
    num2 = "";
    console.log(typeof(num1)); //debugging
    console.log(typeof(num2)); //debugging
    display.textContent = num1
}

deleteEverythingBtn.addEventListener('click', function () {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    result = 0;
    console.log(num1); //debugging
    console.log(num2); //debugging
    equalUsed = false;
})