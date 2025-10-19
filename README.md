# Pharmacy Hub Sabot Webpage

This repository contains the source code for the Pharmacy Hub webpage of Rx Sa Bot Hospital. It serves as a central portal for pharmacy tools and information.

## Overview

The website is built using standard web technologies (HTML, CSS, JavaScript) and is hosted using Firebase Hosting. It provides navigation to various internal pharmacy tools and systems used within the hospital.

## Features

*   **Centralized Access:** Provides links to various pharmacy-related tools and systems.
*   **Responsive Design:** Adapts to different screen sizes using CSS media queries.
*   **Navigation:** Includes a main navigation bar with links to the homepage, tools, reports, and contact information.
*   **Firebase Hosting:** Configured for deployment using Firebase Hosting.

## Technologies Used

*   **HTML5:** Structure of the web pages.
*   **CSS3:** Styling, including Flexbox and Grid layouts, and responsive design.
*   **JavaScript (ES6):** Basic client-side functionality like the mobile hamburger menu and dynamic copyright year.
*   **Firebase Hosting:** For deployment and hosting.
*   **Google Fonts:** Uses the 'Prompt' font family.
*   **Font Awesome:** For icons.

## File Structure

```text
pharmacist-sabot-rx-sabot-webpage/
├── firebase.json          # Firebase Hosting configuration
├── index.html             # Main landing page
├── report.html            # Reports section page
├── script.js              # Client-side JavaScript
├── style.css              # Main stylesheet
└── .firebaserc            # Firebase project aliases
```

### Key Files

*   **`firebase.json`**: Defines the public directory (root `.`) and sets up a rewrite rule to serve `index.html` for all routes, which is common for Single Page Applications (SPAs).
*   **`index.html`**: The main page, featuring the navigation bar, a hero section, and a grid of cards linking to various pharmacy tools.
*   **`report.html`**: A dedicated page listing links to reports and dashboards related to pharmacy operations.
*   **`script.js`**: Handles the dynamic copyright year and the mobile navigation menu toggle functionality.
*   **`style.css`**: Contains all the styling, including CSS variables for theming, responsive layouts, and component-specific styles.

## Setup and Development

1.  **Prerequisites:**
    *   A modern web browser.
    *   Node.js and npm (or yarn) installed if you plan to use the Firebase CLI.
    *   Firebase CLI installed globally (`npm install -g firebase-tools`).

2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/pharmacist-sabot/rx-sabot-webpage.git
    cd rx-sabot-webpage
    ```

3.  **Run Locally (Optional):**
    While you can open `index.html` directly in a browser, to serve it properly (especially if testing Firebase-specific features like routing), use a local server. You can use Python's `http.server`, Node's `http-server`, or the Firebase CLI:
    ```bash
    # Using Python 3
    python -m http.server 8000

    # Or using Firebase CLI (after login)
    firebase serve --only hosting
    ```

4.  **Deploy to Firebase (Optional):**
    *   Ensure you are logged in to Firebase CLI: `firebase login`.
    *   Initialize or configure your Firebase project if not already done: `firebase use --add`.
    *   Deploy the hosting: `firebase deploy --only hosting`.

## Usage

The website is designed to be intuitive. Users navigate using the top menu or by scrolling to the tools section on the main page.

## Contributing

This is a simple static site. Contributions typically involve updating HTML content, styling in CSS, or adding functionality in JavaScript. Changes can be made by modifying the relevant files and deploying them.

## License

This project does not specify a license.
