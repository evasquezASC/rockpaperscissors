// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

let computerChoices = ['rock', 'paper', 'scissors'];

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
    let userChoice = $("#input").val();
        $("#userChoice").text(userChoice.toLowerCase());
    //let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
});

