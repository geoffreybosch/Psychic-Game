var answer = ""
var userGuess = "r"
var win = 0
var loss = 0
var strToGuess = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var guesses = [];

function updateAnswer(){
    var rand = strToGuess[Math.floor(Math.random() * strToGuess.length)];
    answer = rand;
}

updateAnswer()
function printGuesses(){
    var guessesLeft = 9-guesses.length
    if (guesses.includes(event.key)){
        alert`You've already guessed that letter!`
    }
    else{
        guesses.push(event.key);
    }
    
    userGuess = event.key
    document.querySelector('lettersGuessed').innerText = guesses;
    document.querySelector('losses').innerText = loss;
    document.querySelector('guessesLeft').innerText = guessesLeft;
    if (answer == userGuess){
        win= win + 1
        document.querySelector('wins').innerText = win;
        updateAnswer()
        guesses = []
        guessesLeft = 0
    }
    else if (guessesLeft == 0){
        loss= loss + 1
        document.querySelector('losses').innerText = loss;
        updateAnswer()
        guesses = []
        guessesLeft = 9
    }
}

document.onkeydown = printGuesses;



document.onkeydown = printGuesses;


