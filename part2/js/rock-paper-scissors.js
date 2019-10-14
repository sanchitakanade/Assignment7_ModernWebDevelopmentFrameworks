/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: rock-paper-scissors.js
    Assignment No.: 7 
*/

/*eslint-env browser*/
function playGame() {
    "use strict";
    var choice, computersChoice;
    choice = window.prompt("rock, paper or scissors?");
    choice = choice.toLowerCase();
    computersChoice = Math.random();

    //imput validation
    while (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        window.alert("Please enter a proper value, (either rock, paper or scissors)");
        choice = window.prompt("rock, paper or scissors?");
        choice = choice.toLowerCase();
    }

    if (computersChoice < 0.4) {
        computersChoice = "rock";
    } else if (computersChoice < 0.7) {
        computersChoice = "paper";
    } else {
        computersChoice = "scissors";
    }

    if (choice === "rock") {
        if (computersChoice === "rock") {
            window.alert("It's a tie");
        } else if (computersChoice === "paper") {
            window.alert("computer win! \'Paper covers rock.\'");
        } else {
            window.alert("you win! \'Rock destroys scissors.\'");
        }
    } else if (choice === "paper") {
        if (computersChoice === "rock") {
            window.alert("you win! \'Paper covers rock.\'");
        } else if (computersChoice === "paper") {
            window.alert("It's a tie");
        } else {
            window.alert("computer win! \'Scissors cut paper.\'");
        }
    } else {
        if (computersChoice === "rock") {
            window.alert("computer win! \'Rock destroys scissors.\'");
        } else if (computersChoice === "paper") {
            window.alert("you win! \'Scissors cut paper.\'");
        } else {
            window.alert("It's a tie");
        }
    }
}

function main() {
    "use strict";
    var playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Do you want to play the game again? (y/n)");
    }
    window.alert("Thanks for playing the game!");
}
main();