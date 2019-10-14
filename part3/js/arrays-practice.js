/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: arrays-practice.js
    Assignment No.: 7 
*/

//STEP 1
var favoriteMovies = ["Back to the Future", "The Mummy", "E.T.", "Die Another Day", "GoldenEye"];
window.console.log(favoriteMovies[1]);
//STEP 2
var movies = new Array(5);
movies[0] = "Back to the Future";
movies[1] = "The Mummy";
movies[2] = "E.T.";
movies[3] = "Die Another Day";
movies[4] = "GoldenEye";

window.console.log(movies[0]);

//STEP 3
movies = new Array(5);
movies[0] = "Back to the Future";
movies[1] = "The Mummy";
movies[2] = "E.T.";
movies[3] = "Die Another Day";
movies[4] = "GoldenEye";

movies.splice(0, 2, "Back to the Future", "The Mummy", "The Lord of the Rings");

window.console.log("length of movies: " + movies.length);
//STEP 4
movies = [];
var i;
for (i = 0; i < 5; i += 1) {
    movies[i] = favoriteMovies[i];
}
delete movies[0];
window.console.log(movies);
window.console.log("");

//STEP 5

movies = ["Back to the Future", "The Mummy", "E.T.", "Die Another Day", "GoldenEye", "The Lord of the Rings", "Spectre"];

for(i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
window.console.log("");

//STEP 6
movies = ["Back to the Future", "The Mummy", "E.T.", "Die Another Day", "GoldenEye", "The Lord of the Rings", "Spectre"];

for(i in movies) {
    window.console.log(movies[i]);
}

window.console.log("");

//STEP 7
movies = ["Back to the Future", "The Mummy", "E.T.", "Die Another Day", "GoldenEye", "The Lord of the Rings", "Spectre"];
movies.sort();
window.console.log("sorted movies: ");
for(i in movies) {
    window.console.log(movies[i]);
}
window.console.log("");

//STEP 8

movies = ["Back to the Future", "The Mummy", "E.T.", "Die Another Day", "GoldenEye", "The Lord of the Rings", "Spectre"];
var leastFavMovies = ["Wrong Turn", "Crawl", "Doom"];

window.console.log("Movies I like: \n\n");
for(i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
window.console.log("");

window.console.log("Movies I regret watching: \n\n");
for(i = 0; i < leastFavMovies.length; i += 1) {
    window.console.log(leastFavMovies[i]);
}


//STEP 9
movies = ["Back to the Future", "The Mummy", "E.T.", "Die Another Day", "GoldenEye", "The Lord of the Rings", "Spectre"];
leastFavMovies = ["Wrong Turn", "Crawl", "Doom"];

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

window.console.log("\nReverse sorted array: \n");
for(i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 10

movies = ["Back to the Future", "The Mummy", "E.T.", "Die Another Day", "GoldenEye", "The Lord of the Rings", "Spectre"];
leastFavMovies = ["Wrong Turn", "Crawl", "Doom"];

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

window.console.log("\nThe last item in the array: " + movies.pop());

