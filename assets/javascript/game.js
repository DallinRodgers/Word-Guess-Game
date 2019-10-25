var words,
  guesses,
  gamePlaying,
  guessedLetters,
  alreadyGuessed,
  hiddenWord,
  wordToHide;
words = ["mcdonalds", "coke", "fries", "hamburger", "chicken"];
// words = ["coke"];
guessedLetters = [];
alreadyGuessed = [];
hiddenWord = [];
wordToHide = getWord();

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
  for (var i = 0; i < wordToHide.length; i++) {
    hiddenWord.push("_");
  }
  var hidden = hiddenWord.join("");
  return hidden;
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
function revealWord(event) {
  //   check if letter is in word
  if (wordToHide.includes(event.key)) {
    // Update hiddenWord
    for (var i = 0; i < wordToHide.length; i++) {
      if (wordToHide[i] === event.key) {
        // Update UI
        hiddenWord[i] = event.key;
        var reveal = hiddenWord.join("");
        word.textContent = reveal.toUpperCase();
      }
    }
  }
}
document.addEventListener("keypress", function(event) {
  if (guesses > 0) {
    lettersGuessed(event);
    revealWord(event);
  } else {
    alert("Out of guesses");
  }
});

init();
