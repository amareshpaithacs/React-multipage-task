# ITCO - IT Services Website

A multi-page React application built for an IT services and consulting company. This project was put together to showcase responsive design, modern UI components, and client-side routing using React.

## What's Inside

- **Multi-Page Layout**: Fully functioning routing for all pages (Home, About, Services, Team, Contact, Blog Details).
- **Responsive Design**: Built with Bootstrap to ensure everything looks solid on mobile, tablet, and desktop.
- **Dynamic Sliders**: Used `react-slick` for the client testimonials and brand carousels.
- **Reusable Components**: Extracted UI elements like the Newsletter CTA and Header/Footer to keep the codebase clean and DRY.
- **Interactive Forms**: Contact and newsletter forms with clean inline state feedback.

## Tech Stack

- React (v18)
- Vite (for super fast bundling and HMR)
- React Router DOM (v6)
- Bootstrap 5 & Bootstrap Icons
- React Slick (Carousels)
- Vanilla CSS (for custom styling and component overrides)

## Getting Started

If you want to spin this up locally, it's pretty straightforward.

1. **Get the code**: Clone the repo or download the folder.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the dev server**:
   ```bash
   npm run dev
   ```
4. Open up your browser to `http://localhost:5173` (or whatever port Vite throws at you).

## Project Structure

Here is a high-level overview of how the project is organized:

```text
react-multipage-task/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment script
├── public/                 # Static assets that don't need compilation
├── src/
│   ├── assets/             # Images, icons, and local fonts
│   ├── components/         # Reusable UI components
│   │   ├── about/
│   │   ├── blog-details/
│   │   ├── common/         # Header, Footer, NewsletterCta, etc.
│   │   ├── contact/
│   │   ├── home/
│   │   ├── services/
│   │   └── team/
│   ├── pages/              # Main route views
│   │   ├── About.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   └── Team.jsx
│   ├── styles/
│   │   └── main.css        # Global CSS and utility classes
│   ├── App.jsx             # React Router configuration
│   └── main.jsx            # React application entry point
├── index.html              # Main HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite build configuration
└── README.md               # You are here!
```

## Live Demo

🔗 https://amareshpaithacs.github.io/React-multipage-task/
