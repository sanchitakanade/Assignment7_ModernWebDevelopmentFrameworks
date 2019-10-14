/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: dom-practice.js
    Assignment No.: 7
*/

/*eslint-env browser*/

// Grader Note: I have commented the code in STEP 2, STEP 3 and STEP 4, in order
// to get the script in STEP 5 working.

//STEP 1
function displayMessage() {
    window.alert("I have been clicked");
}

//STEP 2
var htmlElement = window.document.getElementById("myButton");
// htmlElement.onclick = function () {
//     window.alert("I have been clicked");
// };

//STEP 3
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
var displayMsg = function () {
    "use strict";
    window.alert("I have been clicked");
};

// $("button2").addEventListener("click", displayMsg);

//STEP 4
// $("button3").addEventListener("click", function () {
//     "use strict";
//     window.alert("I have been clicked");
// });

//STEP 5
window.addEventListener("load", function () {
    "use strict";
    htmlElement = window.document.getElementById("myButton");
    htmlElement.onclick = function () {
        window.alert("I have been clicked");
    };

    $("button2").addEventListener("click", displayMsg);

    $("button3").addEventListener("click", function () {
        window.alert("I have been clicked");
    });
});
