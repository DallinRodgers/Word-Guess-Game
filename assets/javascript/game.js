var words,
  guesses,
  gamePlaying,
  guessedLetters,
  alreadyGuessed,
  hiddenWord,
  wordToHide,
  reveal;
words = ["mcdonalds", "coke", "fries", "hamburger", "chicken"];
// words = ["coke"];
guessedLetters = [];
alreadyGuessed = [];
hiddenWord = [];
wordToHide = getWord();

var body = document.querySelector("#body");
var h1 = document.querySelector("h1");
var gameDetails = document.querySelector(".game-details");
var bottomBorder = document.querySelectorAll(".border-bottom");
var guessed = document.querySelector(".guessed");
var word = document.querySelector(".word");
var remaining = document.querySelector(".remaining");

function init() {
  guesses = 12;
  gamePlaying = true;
  guessed.textContent = "-";
  word.textContent = hideWord();
  remaining.textContent = guesses;

  body.classList.remove("bg-win");
  body.classList.remove("bg-loss");
  gameDetails.classList.remove("game-details-win");
  for (var i = 0; i < bottomBorder.length; i++) {
    bottomBorder[i].classList.remove("border-bottom-win");
  }
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
        reveal = hiddenWord.join("");
        word.textContent = reveal.toUpperCase();
      }
    }
  }
}
function didYouWin() {
  if (wordToHide === reveal) {
    gamePlaying = false;
    body.classList.add("bg-win");
    gameDetails.classList.add("game-details-win");
    for (var i = 0; i < bottomBorder.length; i++) {
      bottomBorder[i].classList.add("border-bottom-win");
    }
    h1.textContent = "you win!!!!".toUpperCase();
  }
}
function didYouLose() {
  if (guesses === 0) {
    gamePlaying = false;
    body.classList.add("bg-loss");
    gameDetails.classList.add("game-details-loss");
    for (var i = 0; i < bottomBorder.length; i++) {
      bottomBorder[i].classList.add("border-bottom-loss");
    }
    h1.textContent = "you lose!!!!".toUpperCase();
  }
}
document.addEventListener("keypress", function(event) {
  if (guesses > 0 && gamePlaying) {
    lettersGuessed(event);
    revealWord(event);
    didYouWin();
    didYouLose();
  }
});

init();
