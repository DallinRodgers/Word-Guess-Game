var words, guesses, gamePlaying, guessedLetters, alreadyGuessed;
words = ["mcdonalds", "coke", "fries", "hamburger", "chicken"];
guessedLetters = [];
alreadyGuessed = [];

var guessed = document.querySelector(".guessed");
var word = document.querySelector(".word");
var remaining = document.querySelector(".remaining");

function init() {
  guesses = 10;
  gamePlaying = true;
  guessed.textContent = "-";
  word.textContent = hideWord();
  remaining.textContent = guesses;
}

function getWord() {
  var randomNumber = Math.floor(Math.random() * words.length);
  var randomWord = words[randomNumber];
  return randomWord;
}
function hideWord() {
  var wordToHide = getWord();
  var hiddenWord = [];
  for (var i = 0; i < wordToHide.length; i++) {
    hiddenWord.push("_");
  }
  hiddenWord = hiddenWord.join("");
  return hiddenWord;
}
function lettersGuessed(event) {
  if (event.keyCode !== 13) {
    if (alreadyGuessed.includes(event.key)) {
      alert("Already guessed");
    } else {
      alreadyGuessed.push(event.key);
      guessedLetters.push(event.key.toUpperCase());
      guessed.textContent = guessedLetters;
      updateGuessCount();
    }
  }
}

function updateGuessCount() {
  guesses = guesses - 1;
  remaining.textContent = guesses;
}

document.addEventListener("keypress", function(event) {
  if (guesses > 0) {
    lettersGuessed(event);
  } else {
    alert("Out of guesses");
  }
});

init();
