Checkout the website live at https://task-app-all-fiction.netlify.app/

# Task App

A simple, modern task management application built with **React**, leveraging functional components, hooks, and context for a smooth user experience. Easily add, edit, and delete tasks in a responsive UI.

## Key Features

- Add, edit (click), and delete (double-click) tasks
- Persistent storage using Local Storage
- Theme switcher with multiple looks using React Context
- Clean, responsive UI styled with CSS

## Core Technologies

- **React 19+** (Functional components, hooks, context)
- **JavaScript**
- **CSS / HTML**

## Code Structure

- `/src/App.jsx` – Root component; manages the task list (with `useState` and `useEffect`) and persists tasks in Local Storage.
- `/src/components/AddTask.jsx` – Controlled form to add new tasks.
- `/src/components/ShowTask.jsx` – Shows the task list; enables editing via single click and deletion via double-click. Handles inline editing using `useState` for the editing state.
- `/src/components/Header.jsx` – App bar and theme selector, using Context for app-wide theme changes.
- `/src/context/ThemeProvider.jsx` – React Context provider for theme, syncing current selection with Local Storage for persistence.
- `/src/context/ThemeContext.jsx` – Exports the React context used throughout the app.
- `/src/main.jsx` – App entry point, sets up the React root with `ThemeProvider` and `StrictMode`.

## Theming

The **ThemeContext** and **ThemeProvider** logic allows users to switch app themes. The current theme is saved in Local Storage, so your preference remains after reloads. Check out [`src/context/ThemeProvider.jsx`](https://github.com/ziqkimi308/task-app/blob/main/src/context/ThemeProvider.jsx) and [`src/components/Header.jsx`](https://github.com/ziqkimi308/task-app/blob/main/src/components/Header.jsx).

## Getting Started

1. **Clone & Install:**
    ```bash
    git clone https://github.com/ziqkimi308/task-app.git
    cd task-app
    npm install
    ```

2. **Development Server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:5173/](http://localhost:5173/) in your browser.

## Project Structure

```
src/
├── App.jsx
├── main.jsx
├── context/
│   ├── ThemeContext.jsx
│   └── ThemeProvider.jsx
├── components/
│   ├── AddTask.jsx
│   ├── Header.jsx
│   └── ShowTask.jsx
├── index.css
├── App.css
...
```
