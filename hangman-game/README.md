# Hangman Game

## Description
This project is a simple Hangman game implemented in JavaScript. The game allows players to guess letters in a hidden word, with a maximum of five incorrect guesses allowed. The game includes a user-friendly interface and provides feedback on the player's progress.

## Files
- **src/index.js**: Contains the main logic for the Hangman game, including functions for resetting the game, creating the alphabet, generating the word to guess, searching for letters, revealing letters, checking for victory, and revealing the word.
- **src/dico.js**: Contains a list of words that can be used in the Hangman game. It exports an array of words that the game can randomly select from.
- **src/styles/styles.css**: Contains the styles for the Hangman game, defining the appearance of the game elements such as the word display, buttons, and messages.
- **index.html**: The main HTML document for the project. It includes the structure of the game interface, links to the CSS file for styling, and the JavaScript files for functionality.

## How to Play
1. Open the `index.html` file in a web browser.
2. Click the "Play" button to start a new game.
3. The hidden word will be displayed as dashes (e.g., "_ _ _ _").
4. Click on the letters of the French alphabet to make guesses.
5. You have a maximum of five incorrect guesses. If you guess a letter that is not in the word, you will lose one try.
6. If you reveal all the letters in the word before running out of tries, you win! If you run out of tries, the game is over.
7. After the game ends, you can click the "Play" button to start a new game.

## Setup
To set up the project, simply clone the repository and open the `index.html` file in your web browser. No additional setup is required.

## License
This project is open-source and available for anyone to use and modify. Enjoy playing Hangman!