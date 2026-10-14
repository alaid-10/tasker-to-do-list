# Tasker.

> Your daily focus — small steps make big progress.

Tasker is a clean, lightweight to-do list app built with plain HTML, CSS, and JavaScript. No frameworks, no build step, no sign-up — just open it and start getting things done.

**Live demo:** [taskerfocus.netlify.app](https://taskerfocus.netlify.app)

## Features

- **Add tasks quickly** — type and press <kbd>Enter</kbd> or click **Add task**
- **Mark tasks as done** — click a task to toggle it complete
- **Delete tasks** — remove a task with the **×** button
- **Progress ring** — see what percentage of your tasks you've finished
- **Remaining task counter** — always know how much is left
- **Saved automatically** — tasks are stored in your browser's `localStorage`, so they're still there when you come back
- **Responsive design** — works on desktop and mobile

## Tech stack

| Layer   | Technology                                   |
| ------- | -------------------------------------------- |
| Markup  | HTML5                                        |
| Styling | CSS3 (custom properties, conic gradients)    |
| Logic   | Vanilla JavaScript (ES6+)                    |
| Storage | Browser `localStorage`                       |
| Fonts   | [DM Sans](https://fonts.google.com/specimen/DM+Sans) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| Hosting | [Netlify](https://www.netlify.com/)          |

## Project structure

```
.
├── index.html    # App markup
├── style.css     # Styles and theme variables
├── app.js        # Task logic: add, toggle, delete, persist
└── favicon.jpg   # Site icon
```

## Getting started

There's nothing to install.

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/tasker.git
   cd tasker
   ```
2. Open `index.html` in your browser.

Or, if you'd like to serve it locally:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

Since Tasker is a static site, it can be deployed anywhere that serves static files:

- **Netlify** — drag and drop the folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo (no build command, publish directory `.`)
- **GitHub Pages** — enable Pages in the repo settings and serve from the `main` branch root

## How it works

Tasks are kept in an array of `{ text, done }` objects. Every change (add, toggle, delete) saves the array to `localStorage` and re-renders the list, the remaining-task counter, and the progress ring. The ring is drawn with a CSS conic gradient driven by the `--progress` custom property, which JavaScript updates on each render.

> **Note:** Because data lives in `localStorage`, tasks are saved per browser and per device. Clearing your browser data will remove them.

## Roadmap ideas

- [ ] Edit existing tasks
- [ ] Filter by all / active / completed
- [ ] "Clear completed" button
- [ ] Dark mode
- [ ] Drag-and-drop reordering

## Author

Made by **Aidan** as a mini project.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
