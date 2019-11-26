// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {

    let userChoice = $("#input").val();
        $("#userChoice").text(userChoice.toLowerCase());
    
});

function computerChoice() {
    let cChoice = Math.random();

    console.log(cChoice);
    if (cChoice <= .33) {
        $("#computerChoice").text('rock');
    } else if (cChoice > .34 && cChoice <= .66) {
        $("#computerChoice").text('paper');
    } else if (cChoice > .66 ) {

    }
}

