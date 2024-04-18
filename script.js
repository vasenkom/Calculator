const display = document.querySelector(".displayScreen");
const numbers = document.querySelectorAll(".num");
const proces = document.querySelectorAll(".proces");
const deleteBtn = document.querySelector(".delete");
const deleteEverythingBtn = document.querySelector(".deleteEverything");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const heart = document.querySelector(".heart");

let num1 = "";
let num2 = "";
let operator = "";
// equalUsed is true when "=" was pressed
let equalUsed = false;
// operatorUsed exists to clear display.texContent from num1
let operatorUsed = false;
let result = 0;

numbers.forEach((number) => {
    number.addEventListener('click', function () {
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
        if (equalUsed === true) {
            equalUsed = false;
        }
        if (operator === "" && num1 !== "") {
            operator += sign.textContent;
            console.log(num1); //debugging
            console.log(num2); //debugging
            operatorUsed = true;
        } else if (num1 === "" || num2 === "") {
            //do nothing
        } else {
            operate(num1, num2, operator);
            operator = sign.textContent;
            operatorUsed = true;
        }
    })
})

heart.addEventListener('click', function() {
    window.alert("˚ʚ♡ɞ˚")
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

deleteBtn.addEventListener('click', function() {
    if (display.textContent != "") {
        if (operator == "") {
            display.textContent = display.textContent.slice(0, -1);
            num1 = num1.slice(0, -1);
            console.log(num1);
            
        } else if (operator != "" && num2 != "") {
            display.textContent = display.textContent.slice(0, -1);
            num2 = num2.slice(0, -1);
            console.log(num2);
        }
    }
})

equal.addEventListener('click', function() {
    if (num1 != '' && num2 != '') {
        operate(num1, num2, operator);
        equalUsed = true
    }
})

deleteEverythingBtn.addEventListener('click', function () {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    result = 0;
    equalUsed = false;
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
    num1 = (Math.round(result * 10) / 10).toString();
    operator = "";
    num2 = "";
    console.log(typeof(num1)); //debugging
    console.log(typeof(num2)); //debugging
    display.textContent = num1
}