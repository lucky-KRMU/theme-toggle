# React Theme Toggle

A sleek, responsive React web application that demonstrates theme toggle functionality (Light Mode vs. Dark Mode) using React's **Context API** for state management and **Tailwind CSS (v4)** for dynamic styling and transitions.

The application features a modern, interactive switch interface inside a clean card layout, showing smooth micro-animations during transitions.

## 🚀 Live Demo
The application is configured to deploy to GitHub Pages. You can view the live site here:
👉 **[Theme Toggle Demo](https://lucky-KRMU.github.io/theme-toggle)**

---

## ✨ Features

- **Global Theme State**: Powered by React's Context API (`ThemeContext` and `ThemeContextProvider`) to share theme state seamlessly across components.
- **Dynamic Tailwind CSS Transitions**: Smooth, polished dark mode transitions on background colors, text colors, and borders using Tailwind CSS.
- **Interactive UI**: A custom checkbox-based switch button inside a double-bordered card with micro-animations.
- **Persisted/Synchronized State**: Direct DOM manipulation of the `<html>` element class list (`light`/`dark`) to update the root document class instantly.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Deployment**: [gh-pages](https://www.npmjs.com/package/gh-pages)

---

## 📂 Project Structure

```text
theme-toggle/
├── src/
│   ├── Components/
│   │   └── Card.jsx                  # The main toggle card component
│   ├── Context/
│   │   ├── ThemeContextProvider.jsx  # Context Provider component
│   │   └── theme.js                  # ThemeContext initialization
│   ├── App.css                       # Extra app styling
│   ├── index.css                     # Global Tailwind entry point
│   ├── App.jsx                       # Main application component
│   └── main.jsx                      # App entry point
├── package.json                      # Scripts and dependencies
└── vite.config.js                    # Vite bundler configuration
```

---

## 💻 Getting Started

### 📋 Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 📥 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lucky-KRMU/theme-toggle.git
   cd theme-toggle
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### ⚙️ Running Locally

Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

### 🛠️ Production Build

Build the project for production:
```bash
npm run build
```
This compiles the application and outputs optimized static files to the `dist` folder.

### 🚀 Deploying to GitHub Pages

Deploy the build to GitHub Pages:
```bash
npm run deploy
```
This runs the `predeploy` script (`npm run build`) and publishes the `dist` directory to the `gh-pages` branch.
