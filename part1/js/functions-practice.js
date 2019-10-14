/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: functions-practice.js
    Assignment No.: 7 
*/

/*eslint-env browser*/
//STEP 1
function halfNumber(number) {
    "use strict";
    var result = number / 2;
    window.console.log("Half of " + number + " is " + result);
    return result;
}
//halfNumber(5);

//STEP 2
function squareNumber(number) {
    "use strict";
    var result = number * number;
    window.console.log("The result of squaring the number " + number + " is " + result);
    return result;
}
//squareNumber(4);

//STEP 3
function percentOf(number1, number2) {
    "use strict";
    var result = (number1 / number2) * 100;
    window.console.log(number1 + " is " + result + "% of " + number2);
    return result;
}
//percentOf(2, 4);

//STEP 4
function findModulus(number1, number2) {
    "use strict";
    var modulus = number2 % number1;
    window.console.log(modulus + " is the modulus of " + number1 + " and " + number2 + ".");
    return modulus;
}
//findModulus(4, 10);

//STEP 5
function add(numbers) {
    "use strict";
    var sum = 0;
    numbers.forEach(function (number) {
        sum += number;
    });
    return sum;
}

function main() {
    "use strict";
    var argumentsArr, number;
    argumentsArr = [];
    while (true) {
        number = window.prompt("Enter a number");
        if (number !== null) {
            number = parseFloat(number);
            if (isNaN(number)) {
                window.alert("Invalid number");
            } else {
                argumentsArr.push(number);
            }
        } else {
            break;
        }
    }
    window.document.write("sum is: " + add(argumentsArr));
}
main();