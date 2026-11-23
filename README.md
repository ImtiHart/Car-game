# Car Game

A browser-based car game, built with plain HTML, CSS and JavaScript. It has a "WANTED" title screen, a controls page, a music selector and a game screen with a four-lane road.

> **Status:** work in progress. The title screen, controls page and music selector work, but the game screen currently only draws the road. There is no player car, movement or scoring yet.

## Screens

| Page | Description |
| --- | --- |
| `Game/intro.html` | Animated title screen with buttons for **Start**, **Controls** and **Music** |
| `controls.html` | Shows the keys used to move left and right |
| `music.html` | Radio-button list for choosing background music, plus a "No Music" option |
| `game.html` | The game screen: a four-lane road with dashed lane dividers |

## Project Structure

```
Car-game/
├── controls.html
├── game.html
├── music.html
├── music.js          # Plays the selected track on a loop
└── Game/
    ├── intro.html
    └── Images/       # Icons and key images
```

## Running

No build step is needed.

1. Clone the repository.
2. Open `Game/intro.html` in a browser.

Tip: run a local server so audio loads reliably:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/Game/intro.html`.

## Music

`music.js` loads tracks from a `Music/` folder, which is **not included** in the repo. To use the music selector, create a `Music/` folder next to `music.js` and add your own MP3 files, then update the file names in `music.js`.

Don't commit copyrighted music to a public repository. Royalty-free tracks are a safer choice.

## Known Issues

- Pages use Windows-style paths (`Images\...`), which break on Linux, macOS and some web hosts. Use `/` instead.
- Links between pages are inconsistent: `intro.html` is in `Game/`, but it links to `game.html` and `controls.html` in the parent folder as if they were in the same folder.
- `game.html` loads `music.js`, which expects the music form from `music.html`, so it throws an error on the game page.
- The `Start` button's `onclick="fade"` does nothing.
- The pages use fixed pixel sizes and are not responsive.

## Roadmap

- Add a player car with keyboard controls
- Add obstacles, scoring and a game-over screen
- Fix paths and links between pages
- Save the chosen music between pages

## Tech Stack

HTML5, CSS3, JavaScript

## License

No license has been specified yet. Consider adding one, such as MIT.
