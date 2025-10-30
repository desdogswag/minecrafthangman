"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Well now we are more familiar with JavaScript, back to hangman.
// Try to code something like the hangman game I provided.
// Note: if you want my images they are at these links. There are 9 images.
// 9 is unmelted and 0 is fully melted:
//i want to be able to use images that reflect the guessing state
//as well as a way to randomly do a select words that are four letters (i donnt want to to it crazy)
// need to do something with this
//document.body.addEventListener('keyup',e=>console.log(e.key))
//need this for event code
//let eventHasHappened = false
// while(!eventHasHappened){
//     if(checkEvent())  
//         eventHasHappened = true;
//     sleep(100)
// }
//run on event code
// ok lets start with some words
var words = ["rock", "book", "tree", "rose", "lily", "frog", "yuzu", "glow", "seed", "bark", "lava"];
//randomly select a word from words
var selectedWord = words[Math.floor(Math.random() * words.length)];
//console.log(selectedWord) //for testing
//create an array to hold the guessed letters
var guessedLetters = []; //start as an empty array, fresh every game
//create a variable to hold the number of wrong guesses
var wrongGuesses = 0; //start at 0 wrong guesses
//create a variable to hold the maximum number of wrong guesses
var maxWrongGuesses = 9; //9 wrong guesses and you lose
//create a variable to hold the current state of the word
var currentState = "_".repeat(selectedWord.length).split(""); //start with underscores
// i think i need an event loop but not quite sure what i need first
document.body.addEventListener('keyup', function (e) { return console.log(e.key); }); // pulled from assignmnet
//need to use this to capture key presses
document.body.addEventListener('keyup', function (e) {
    var guessedLetter = e.key.toLowerCase(); //swithc the letter to lowercase
    if (guessedLetter.length === 1 && guessedLetter >= 'a' && guessedLetter <= 'z') { //check if its a letter
        if (!guessedLetters.includes(guessedLetter)) { //check if letter has already been guessed
            guessedLetters.push(guessedLetter); //add letter to guessed letters to see
            if (selectedWord.includes(guessedLetter)) { //check if letter is in the word
                //update current state
                for (var i = 0; i < selectedWord.length; i++) { // if slected word includes guessed letter add
                    if (selectedWord[i] === guessedLetter) {
                        currentState[i] = guessedLetter;
                    }
                }
            }
            else {
                wrongGuesses++; // adds to incorrect but also allows for us to see what we are doing
            }
        }
    }
});
// i think i need to do something to update the display
function updateDisplay() {
    console.log("Current State: " + currentState.join(" "));
    console.log("Wrong Guesses: " + wrongGuesses);
    console.log("Guessed Letters: " + !guessedLetters.join(", "));
} //should allow us to see some output in regards to our html file
//need to fix the any property on guessedletters
//check for win or lose
function checkWinOrLose() {
    if (currentState.join("") === selectedWord) {
        console.log("You win!");
    }
    else if (wrongGuesses >= maxWrongGuesses) {
        console.log("You lose! The word was: " + selectedWord);
    }
} //this makes sense to me for losing and winning
//need a way to fresh the game once hit the win/lose condition because hangman is cool
function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = []; //start basically with a fresh slate
    wrongGuesses = 0;
    currentState = "_".repeat(selectedWord.length).split("");
} //resets the game to a fresh state
//i think this is a good way to start for coding
//im not quite sure how i need to do to change the picture nor how to add them
