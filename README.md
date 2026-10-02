# Tulas International School — Homepage Redesign

A modern, animated and responsive homepage redesign for **Tulas International School (TIS)**.

The project focuses on creating a premium educational web experience while maintaining the school's core identity and content direction.

## Live Demo

**Live Website:** https://tis-homepage-redesign-seven.vercel.app/

**GitHub Repository:** https://github.com/mahendra2821/Tulas-International-School/tree/main

---

## Overview

This project was developed as a frontend redesign challenge for Tulas International School.

The goal was to create a modern, engaging and high-converting homepage with:

- Clean component architecture
- Responsive layouts
- Smooth animations
- Interactive UI elements
- Mobile-friendly navigation
- Modern visual hierarchy
- Reusable React components

---

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

### Deployment

- Vercel

### Development Tools

- VS Code
- Git
- GitHub
- Chrome DevTools

---

## Features

### Responsive Design

The website is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile
- Small-screen devices

### Scroll-Triggered Animations

Framer Motion is used to create viewport-based reveal animations for major sections and content blocks.

### Scroll Progress Indicator

A progress indicator at the top of the page shows the user's current position while scrolling.

### Custom Cursor

Desktop users get an interactive cursor that responds to links and buttons.

The cursor is disabled on smaller devices to avoid interfering with touch interactions.

### Mobile Navigation

A responsive navigation menu is provided for mobile and tablet-sized screens.

### Interactive Hover Effects

Buttons, cards, links and images include subtle hover interactions to improve the overall experience.

---

## Page Structure

```text
TIS Homepage
│
├── Navbar
│
├── Hero
│
├── About
│   └── Statistics
│
├── Academics
│   └── Programs
│
├── Why TIS
│   └── Feature Cards
│
├── Campus
│   └── Image Gallery
│
├── Admissions
│
├── Testimonials
│
├── Final CTA
│
└── Footer
```

---

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── WhyTIS.jsx
│   ├── Campus.jsx
│   ├── Admissions.jsx
│   ├── Testimonials.jsx
│   ├── CTA.jsx
│   ├── Footer.jsx
│   ├── Reveal.jsx
│   ├── CustomCursor.jsx
│   └── ScrollProgress.jsx
│
├── data/
│   └── schoolData.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Architecture

The application is divided into reusable components instead of placing the entire homepage inside a single component.

### Components

Each major homepage section is isolated into its own React component.

This makes the code easier to:

- Maintain
- Test
- Modify
- Reuse
- Explain during technical review

### Data Layer

School-related content is separated into:

```text
src/data/schoolData.js
```

This prevents unnecessary duplication of static content throughout the components.

### Animation System

Reusable viewport animations are handled through:

```text
src/components/Reveal.jsx
```

This keeps animation logic consistent across the homepage.

---

## Animation Approach

Framer Motion is used for:

- Hero entrance animations
- Scroll-triggered section reveals
- Card animations
- Hover interactions
- Mobile menu transitions
- CTA animations
- Custom cursor movement

Viewport animations use `whileInView` with `once: true` so completed sections do not continuously replay their entrance animations.

---

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd tis-homepage
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed by Vite.

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The project can be deployed using Vercel.

### Vercel Deployment

1. Push the project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Select the project.
5. Vercel detects the Vite configuration.
6. Deploy the application.

### Build Configuration

```text
Build Command:
npm run build

Output Directory:
dist
```

---

## Responsive Design

The interface was designed with a mobile-first approach.

Responsive behavior includes:

- Collapsible mobile navigation
- Responsive typography
- Flexible grid layouts
- Adaptive spacing
- Mobile-friendly buttons
- Desktop-only custom cursor
- Responsive image layouts

---

## Performance Considerations

The implementation avoids unnecessary global state and excessive scroll listeners.

Key considerations include:

- Component-based architecture
- Viewport-based animations
- Reusable animation components
- CSS-based styling
- Responsive image sizing
- Minimal dependencies
- No unnecessary animation loops

---

## Accessibility

The interface includes:

- Semantic HTML sections
- Descriptive image `alt` attributes
- Accessible navigation controls
- Button labels
- Keyboard-friendly links
- Mobile-friendly interaction areas

---

## Browser Support

Tested for modern browsers including:

- Google Chrome
- Microsoft Edge
- Firefox

---

## Author

**Mahendra Babu**

Frontend Developer

Built with React, Tailwind CSS and Framer Motion.

---

## License

This project was created as a frontend development assignment and redesign concept for evaluation purposes.
