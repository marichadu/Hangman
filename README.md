# Hangman

Modern, theme-rich Hangman game built with plain HTML, CSS, and JavaScript.

## Overview

This project runs entirely in the browser with no build step and no framework. The current version is a single-page implementation with animated visuals, multiple languages, and keyboard support.

## Highlights

- 7 themes: Futuristic, Cute, Classic, Pirate, Space, Minimal, Retro
- 5 languages: English, French, Spanish, Russian, Georgian
- Animated SVG gallows and character drawing
- On-screen keyboard plus physical keyboard input
- Responsive UI for desktop and mobile
- Instant restart with New Game

## Quick Start

1. Clone the repository.
2. Open index.html directly in a browser.

Optional local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Gameplay

1. Choose a theme and language.
2. Guess letters to reveal the hidden word.
3. Wrong guesses add one hangman part.
4. Reach 10 wrong guesses and the game ends.
5. Reveal all letters before that to win.

## Controls

- Mouse or touch: click letters on the virtual keyboard
- Physical keyboard: type letters directly
- Restart: click New Game

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts

## Project Layout

- index.html: Active game app (UI, styles, logic, dictionaries)

## Notes For Contributors

- The playable production version is currently contained in index.html.
