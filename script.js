const display = document.querySelector(".displayScreen");
const numbers = document.querySelectorAll(".num");
const proces = document.querySelectorAll(".proces");
const deleteBtn = document.querySelector(".delete");
const devide = document.querySelector(".devide");
const deleteEverythingBtn = document.querySelector(".deleteEverything");
const multiply = document.querySelector(".multiply");
const substract = document.querySelector(".substract");
const equal = document.querySelector(".equal");
const addBtn = document.querySelector(".add");

let num1 = "";
let num2 = "";
operator = "";
equalUsed = false;

numbers.forEach((number) => {
    number.addEventListener('click', function () {
        if (equalUsed === true) {
            display.textContent = "";
            num1 = "";
            equalUsed = false;
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
        if (operator === "" && num1 !== "") {
            display.textContent = '';
            operator += sign.textContent;
            console.log(num1)
        } else if (num1 === "" || num2 === "") {
            //do nothing
        } else {
            operate(num1, num2, operator);
            display.textContent += sign.value;
            operator = button.value;
        }
    })
})

function add(n1, n2) {
    return n1 + n2;
}

function devide(n1, n2) {
    return n1 / n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function substract(n1, n2) {
    return n1 - n2;
}

