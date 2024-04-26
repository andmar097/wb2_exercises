"use strict"

// create a variable for the current hour and greeting
let currentHour =20;
let greeting = "";

//create and if/else if statement to figure out our greeting
//before 10am: Good morning; after 10am but before 5, good afternoon, after 5: good evening

if (currentHour <= 10) {
    gretting = "Good Morning!";
}
else if (currentHour >= 10 && currentHour < 17) {
    greeting = "Good afternoon!";
} else {
greeting = "Good Evening!";
}


//display the results in the console
console.log(greeting)