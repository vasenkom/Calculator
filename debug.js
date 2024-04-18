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
        if (typeof display.textContent === 'string') {
            display.textContent = "";
        }
        if (equalUsed === true) {
            equalUsed = false;
        }
        if (operator === "" && num1 !== "") {
            display.textContent = '';
            operator += sign.textContent;
            display.textContent += sign.textContent;
            console.log(num1); //debugging
            console.log(num2); //debugging
        } else if (num1 === "" || num2 === "") {
            //do nothing
        } else {
            display.textContent = '';
            operate(num1, num2, operator);
            display.textContent += sign.textContent;
            operator = sign.textContent;
        }
    })
})

function sum(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function devide(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}

function multiply(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}

function substract(n1, n2) {
    return parseInt(n1) - parseInt(n2);
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
    console.log(typeof(num2));
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