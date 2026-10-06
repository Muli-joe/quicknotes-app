# QuickNotes

QuickNotes is a small note-taking web app built with plain HTML, CSS and JavaScript. You can write short notes, file them under Personal, Work or Study, search them as you type, and delete the ones you no longer need. Notes are saved in your browser with localStorage, so they are still there when you come back.

## Features

- Add notes (up to 200 characters) with a Personal, Work or Study category
- Validation messages for empty or too-long notes
- Each note shows its text, category label, date and time, and a Delete button
- Colour-coded note cards, one colour per category
- Live, case-insensitive search with a "No notes match your search." message
- Note count that reads correctly for zero, one and many notes
- Notes saved and loaded with localStorage
- "Clear all" button with a confirmation prompt (bonus)
- Responsive layout: the form stacks vertically on screens 600px or narrower

## How to run locally

1. Clone the repository: `git clone https://github.com/Muli-joe/quicknotes-app.git`
2. Open the `quicknotes-app` folder.
3. Open `index.html` in your browser (or use the VS Code Live Server extension).

No installation or build step is needed.

## What I learned

- How to build the list from an array with `createElement` and `textContent`, so user text is never inserted as HTML.
- How to save and load data with `localStorage`, using `JSON.stringify` and `JSON.parse`, and to guard against bad saved data with `try/catch`.
- How to filter an array for live search and keep the count and "no results" message correct.
- How to lay out a form with Flexbox and change it on small screens with an `@media (max-width: 600px)` rule.
- How to commit after each finished task so the Git history tells the story of the project.
