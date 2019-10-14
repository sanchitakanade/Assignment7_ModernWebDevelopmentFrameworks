/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: inventory-management.js
    Assignment No.: 7 
*/

/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update an existing product’s inventory (quantity)");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function displayProducts(inventory) {
    "use strict";
    inventory.sort();
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
    });
    window.console.log("");
}

function updateStockQuantity(inventory) {
    "use strict";
    var updatedProduct, sku, stockQuantity;
    sku = window.prompt("Enter a sku number ");
    sku = parseInt(sku, 10);
    stockQuantity = window.prompt("Enter a new stock quantity");
    stockQuantity = parseInt(stockQuantity, 10);
    inventory.forEach(function (product) {
        if (product[0] === sku) {
            product[2] = stockQuantity;
            updatedProduct = product[1];
        }
    });
    window.console.log("Quantity for " + updatedProduct + " is updated.");
    window.console.log("");
}

function main() {
    "use strict";
    var inventory, command;
    displayMenu();
    inventory = [[4824, "Shirt", 10, 15.99],
            [6343, "Jeans", 22, 39.99],
            [3223, "Socks", 36, 9.99],
            [2233, "Hat", 12, 14.99],
            [9382, "Jacket", 5, 49.99]];

    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                displayProducts(inventory);
            } else if (command === "update") {
                updateStockQuantity(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}

main();