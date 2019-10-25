var words, guesses, gamePlaying;
var words = ["mcdonalds", "coke", "fries", "hamburger", "chicken"];

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

document.addEventListener("keypress", function(event) {
  // event.which is used for browsers that do not support keyCode
  console.log(event.key.toLowerCase());
});

init();
