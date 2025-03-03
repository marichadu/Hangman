// import words from './dico.js';

const words = dico;

const alphabetDisplay = document.getElementById('alphabetDisplay');
const wordDisplay = document.getElementById('wordDisplay');
const triesDisplay = document.getElementById('triesDisplay');
const playButton = document.getElementById('playButton');
const message = document.getElementById('message');

let chosenWord = '';
let displayedWord = [];
let remainingTries = 5;

 function updateDisplay() {
    wordDisplay.textContent = displayedWord.join(' ');
    triesDisplay.textContent = `Tries Left: ${remainingTries}`;
    message.textContent = ''; // Clear any previous messages
    updateHangman(); // Update the hangman display
}

function updateHangman() {
  const hangmanStages = [
    `
    -----
    |   |
    |    
    |    
    |    
    |    
    `,
    `
    -----
    |   |
    |   o
    |    
    |    
    |    
    `,
    `
    -----
    |   |
    |   o
    |   |
    |    
    |    
     `,
     `
    -----
    |   |
    |   o
     |  /|\\
    |    
    |    
     `,
     `
    -----
    |   |
    |   o
     |  /|\\
    |  / 
    |    
    |    
     `,
     `
    -----
    |   |
    |   o
     |  /|\\
     |  / \\
    |    
    |    
     `,
  ];
  hangmanDisplay.textContent = hangmanStages[5 - remainingTries];
}

function reset() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = Array.from(chosenWord).map(char => (char === '-' || char === "'") ? char : '_');
    remainingTries = 5;
    message.textContent = ''; // Clear any previous messages
    updateDisplay();
    alphabetDisplay.innerHTML = ''; // Clear previous alphabet buttons
    creer_lettres_alphabet();
}

function creer_lettres_alphabet() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => rechercher_une_lettre(letter, button));
        alphabetDisplay.appendChild(button);
    });
}

function rechercher_une_lettre(letter, button) {
if (remainingTries <= 0) return

  button.disabled = true; // Disable the button after it's clicked
  let correctGuess = false;
  for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
          displayedWord[i] = letter;
          correctGuess = true;
      }
  }
  if (!correctGuess) {
      remainingTries--;
  }
  updateDisplay();
  verif_victoire();
}

function verif_victoire() {
  if (remainingTries <= 0) {
      message.textContent = `Game Over! The word was: ${chosenWord}`;
      playButton.style.display = 'block';
  } else if (!displayedWord.includes('_')) {
      message.textContent = 'Congratulations! You guessed the word!';
      playButton.style.display = 'block';
  }
}

playButton.addEventListener('click', () => {
  reset();
  playButton.style.display = 'none';
});

reset();