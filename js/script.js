// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
    
    let userChoice = $("#input").val();
    $("#userChoice").text(userChoice.toLowerCase());
    
    let computerResult = computerChoice();
    
    if (userChoice === computerResult) {
        $("#result").text("Nobody wins!")
    } else if (userChoice === "rock" && computerResult === "paper" 
            || userChoice === "paper" && computerResult === "scissors"
            || userChoice === "scissors" && computerResult === "rock") {
        $("#result").text("Too bad! Computer wins!")
    } else if (userChoice === "rock" && computerResult === "scissors" 
            || userChoice === "paper" && computerResult === "rock" 
            || userChoice === "scissors" && computerResult === "paper") {
        $("#result").text("Congratulations you have won!")
    } else {
        $("#result").text("Error! Choose rock, paper, or scissors!")
    }

    console.log(computerResult,userChoice);
});

function computerChoice() {
    let cChoice = Math.random();
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    console.log(cChoice);
    if (cChoice <= .33) {
        $("#computerChoice").text(rock);
        return rock
    } else if (cChoice > .34 && cChoice <= .66) {
        $("#computerChoice").text(paper);
        return paper;
    } else if (cChoice > .66 ) {
        $("#computerChoice").text(scissors);
        return scissors;
    } else {
        $("#computerChoice").text("Error! Try again!")
    }
}

