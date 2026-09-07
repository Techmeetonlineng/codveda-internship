# Codveda Internship Portfolio — Task 2

A modern, production-ready, dark-themed 3-page React portfolio web application built with **React**, **Vite**, and **React Router**. Designed with a sleek navy-blue aesthetic, custom SVG icons, responsive CSS grid layouts, and smooth page transition animations.

---

## 🚀 Features

- **Dark Navy-Blue Theme:** Carefully designed dark UI palette optimized for readability and modern developer portfolios.
- **Smooth Navigation & Scroll:** Client-side routing via `react-router-dom` accompanied by global smooth scrolling and custom fade-in page transitions (`fadeInUp`).
- **Multi-Page Architecture:**
  - **Home:** Features a custom hero banner background, introduction badges, and core feature highlight cards.
  - **About:** Showcases structured project information divided across strategic sections, enhanced with custom illustration assets (`about-team.png`, `about-planning.png`, `about-dev.png`) and SVG feature icons.
  - **Contact:** Includes direct professional channels (GitHub, LinkedIn, Email) alongside an interactive feedback form.
- **Fully Responsive:** Built with flexible CSS Grid and Flexbox for seamless adaptation across desktop, tablet, and mobile viewports.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Bundler & Tooling:** Vite
- **Routing:** React Router DOM
- **Styling:** Modular Global CSS with keyframe animations
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```text
basic-level-task2/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── about-dev.png
│   │   ├── about-planning.png
│   │   ├── about-team.png
│   │   ├── codveda.png
│   │   └── hero-bg.png
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```
