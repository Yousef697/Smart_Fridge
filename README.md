# Smart Fridge — Bootstrap version

This version applies the concepts from CSE411 Lab 04: Bootstrap 5.3.8, responsive navigation, responsive grid layout, Bootstrap buttons, responsive images, and testing at different viewport widths.

## Project structure

```text
smart-fridge-bootstrap/
├── index.html
├── system.html
├── contact.html
├── package.json
├── package-lock.json       # generated after npm install
├── node_modules/           # generated after npm install
├── css/
│   └── style.css
└── media/
    └── architecture.png   # add your existing architecture image here
```

## Run it

Install Node.js from https://nodejs.org/ if you do not already have it. Open a terminal in this folder and run:

```bash
npm install
npm start
```

Keep the terminal open while using the website. `lite-server` should open the site in your browser.

## What was changed?

- Added the mobile viewport meta tag to all HTML pages.
- Added Bootstrap CSS and the Bootstrap JavaScript bundle.
- Replaced the old navigation with a responsive, collapsible Bootstrap navbar.
- Used the Bootstrap grid: `col-12 col-md-6 col-lg-4` for the Home page cards.
- Used `btn btn-success` and `btn btn-danger` for the system control buttons.
- Used `img-fluid rounded` for the system architecture image.
- Used responsive wrappers and Bootstrap table classes for tables.
- Kept `css/style.css` for the project's custom colors and visual identity.
- The system control buttons update demonstration text only; real hardware control needs a backend/API connection.

## Test responsive layout

In Chrome or Edge, press F12, enable the device toolbar, and test narrow mobile, tablet, and desktop widths. Confirm that the navbar collapses on small screens, Home cards become 1 / 2 / 3 columns, and tables/images fit their containers.
