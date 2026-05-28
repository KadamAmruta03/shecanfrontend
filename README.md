# She Can Foundation | Empowering Every Woman

<div align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-powered-646CFF?style=flat-square&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat-square&logo=reactrouter)
![CSS3](https://img.shields.io/badge/CSS3-Modern_UI-1572B6?style=flat-square&logo=css3)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)

</div>

> A mission-driven frontend showcase for a non-profit organization dedicated to women's empowerment — built to demonstrate high-performance scroll-triggered animations, intersection observer logic, and a refined dark-mode aesthetic.

<div align="center">

  <img width="850" alt="She Can Homepage" src="https://github.com/user-attachments/assets/a39e17dd-3672-49d9-b0fb-03fbc4e876a9" />
  <p><i>Homepage — Immersive dark-themed interface with mission-led storytelling</i></p>

  <br/>

  <img width="850" alt="Our Story Page" src="https://github.com/user-attachments/assets/09c7301c-7b94-49ed-af9f-89f3f1a66215" />
  <p><i>Our Story — Dynamic row layouts with directional slide-in transitions</i></p>

  <br/>

  <img width="850" alt="Donation Page" src="https://github.com/user-attachments/assets/47048a3e-ccbf-4e28-b5cc-9b2d49840227" />
  <p><i>Donation Flow — Minimalist interactive component grid</i></p>

  <br/>

  <img width="850" alt="Official Credentials" src="https://github.com/user-attachments/assets/19aa8ea7-1401-4afb-b00c-0fea0d18a467" />
  <p><i>Official Credentials & Footer — High-fidelity document showcase with interactive hover scaling</i></p>

</div>

**🔗 Live Demo:** [she-can-foundation.vercel.app](https://shecanfrontend-fw9v.vercel.app/)

---

## Overview

She Can Foundation is a **pure frontend showcase** designed to represent a modern non-profit digital presence. The project focuses on "Storytelling through Motion," using custom React hooks and CSS transitions to create a premium, trustworthy, and impactful user experience.

Rather than using heavy animation libraries, this project implements a lightweight **Intersection Observer** architecture to trigger synchronized heading and image transitions, ensuring a smooth 60fps experience across all devices.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Core Framework | React 18+ (Vite-powered) |
| Routing | React Router DOM v6 |
| Styling | CSS3 — Modern Dark UI with Glassmorphism touches |
| Icons | Lucide React / FontAwesome |
| Performance | Intersection Observer API (Custom Scroll Triggering) |
| Layout | CSS Grid & Flexbox (Responsive Design) |
| Deployment | Vercel |

---

## Technical Highlights

### 1. Synchronized Scroll-Reveal Engine
The application uses a centralized `IntersectionObserver` logic within `OurStory.jsx` and `OurCertificate.jsx`. This allows for "Directional Entrances" where images slide in from their respective screen edges while headings perform a subtle vertical fade-in, creating a coordinated visual flow.

### 2. High-Performance CSS Transitions
By prioritizing `transform: translateX/Y` and `opacity` over properties like `top` or `margin`, the site ensures that animations are handled by the GPU. This eliminates layout thrashing and provides a "buttery smooth" feel.

### 3. Component-Based Design System
The UI is built with reusability in mind. Each section follows a `story-row` pattern that handles responsive stacking and mirrored layouts (Image-Left vs. Image-Right) using simple CSS class toggles.

### 4. Optimized Identity Showcase
The `OurCertificate` page demonstrates a specialized "Document Spotlight" view, using `box-shadow` depth and scale-on-hover effects to emphasize the authenticity and importance of the organization's legal credentials.

---

## Project Structure
```plaintext
She-Can-Foundation/
├── public/                <-- NGO assets & official certification images
├── src/
│   ├── components/
│   │   ├── Header.jsx      <-- Transparent navigation & brand identity
│   │   └── Footer.jsx      <-- Mission summary & social links
│   ├── pages/
│   │   ├── OurStory.jsx    <-- Core mission page with reveal logic
│   │   └── OurCertificate.jsx <-- Credential showcase with slide effects
│   ├── styles/
│   │   ├── OurStory.css     <-- Directional animation keyframes
│   │   └── OurCertificate.css <-- Grid layouts & document styling
│   ├── App.jsx            <-- Route management & layout wrapper
│   └── main.jsx           <-- Vite entry point
├── index.html
├── vite.config.js
└── README.md
```
# Clone the repository
git clone [https://github.com/KadamAmruta03/she-can-foundation.git](https://github.com/KadamAmruta03/she-can-foundation.git)

# Navigate to directory
cd she-can-foundation

# Install dependencies
npm install

# Start development server
npm run dev

---

## What I Learned

This project was built specifically to sharpen:
- **Scroll-Driven UI Architecture:** Implementing complex "reveal" animations manually using React `useRef` and `useEffect` hooks paired with native browser observers.
- **Modern CSS Layout Hierarchy:** Mastering alternating content structures using CSS Grid while managing component state transitions seamlessly.
- **Performance Optimization:** Leveraging hardware-accelerated CSS properties (`transform` and `opacity`) alongside `will-change` hints to prevent paint bottlenecks.
- **Clean Interface Design:** Designing a modern, trustworthy digital identity for a non-profit organization utilizing balanced dark-mode spacing.

---

## Contributing

Found a bug or have a suggestion? Feel free to open an issue or fork the repo and submit a pull request. All contributions are welcome.

---

