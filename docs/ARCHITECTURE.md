# Architecture

This document describes the technical architecture of this portfolio project and records the key design decisions made throughout its development.

Rather than documenting only *what* was built, this file explains *why* certain technologies, patterns, and architectural choices were made. As the project grows, this document will evolve alongside it, providing context for future improvements and ensuring the reasoning behind important decisions is never lost.

---

# Project Overview

This portfolio is being built as both a personal website and a demonstration of my software engineering practices.

Its primary goals are to:

- Showcase my software development projects.
- Showcase my cloud computing projects.
- Highlight my professional experience and certifications.
- Demonstrate clean architecture, maintainable code, and thoughtful documentation.
- Continuously evolve as my technical skills and experience grow.

This project is treated as a real software product rather than a static portfolio website.

---

# Architecture Principles

The following principles guide every technical decision made throughout this project.

## Scalability

The project should be easy to expand without requiring major restructuring.

As additional projects, certifications, blogs, or features are introduced, the existing architecture should continue to support future growth.

---

## Separation of Concerns

Each folder, file, and component should have a single, well-defined responsibility.

Examples include:

- Pages assemble complete screens.
- Components build reusable interface elements.
- Layouts define page structure.
- Hooks contain reusable logic.
- Utilities contain helper functions.
- Data stores static application content.

Keeping responsibilities separate makes the project easier to understand, maintain, and extend.

---

## Reusability

Components should be designed for reuse wherever possible.

Examples include:

- Navigation
- Footer
- Buttons
- Project Cards
- Skill Cards
- Section Headers

Building reusable components reduces duplication and improves consistency throughout the application.

---

## Maintainability

The project should remain easy to understand months or even years after development.

To achieve this, the project prioritises:

- Clear folder organisation
- Consistent naming conventions
- Small, focused components
- Meaningful Git commits
- Good documentation

---

## Continuous Improvement

This portfolio is a living project.

Rather than waiting until everything is complete, new projects, improvements, and features will be added incrementally.

The architecture is expected to evolve as new requirements emerge and my technical skills continue to grow.

---

# Technology Decisions

This section records the reasoning behind each major technical decision.

## React

### Decision

React was selected as the frontend framework.

### Why

React provides a component-based architecture that encourages reusable, maintainable, and scalable user interfaces. It also aligns with modern frontend development practices and allows me to demonstrate practical React development skills throughout the project.

**Decision Date:** 27 July 2026

---

## Vite

### Decision

Vite was selected as the build tool.

### Why

Vite offers a fast development server, efficient production builds, and a lightweight development experience. Its simplicity makes it an excellent foundation for this portfolio while remaining highly scalable.

**Decision Date:** 27 July 2026

---

## React Router DOM

### Decision

React Router DOM was selected for application routing.

### Why

The portfolio contains multiple pages while remaining a single-page application. React Router provides clean client-side routing and allows the project to grow without introducing unnecessary complexity.

**Decision Date:** 27 July 2026

---

## Tailwind CSS

### Decision

Tailwind CSS was selected as the primary styling framework.

### Why

Tailwind's utility-first approach allows interfaces to be developed quickly while maintaining consistency throughout the application. It also reduces the need for excessive custom CSS.

**Decision Date:** 27 July 2026

---

## DaisyUI

### Decision

DaisyUI was added as the component library.

### Why

DaisyUI provides well-designed, accessible UI components that integrate seamlessly with Tailwind CSS. It accelerates development while still allowing full customisation when needed.

The goal is to use DaisyUI to improve productivity rather than relying on it for every design decision.

**Decision Date:** 27 July 2026

---

## Git & GitHub

### Decision

Git is used for version control, with GitHub serving as the remote repository.

### Why

Version control is essential for tracking development history, documenting progress, managing changes safely, and showcasing professional development practices.

Meaningful commits and organised documentation will be maintained throughout the project.

**Decision Date:** 27 July 2026

---

# Folder Architecture

The project follows a feature-based folder structure.

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── styles/
├── utils/
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Why this structure?

This organisation separates application concerns and keeps related functionality together.

As the application grows, each folder can expand independently without making the project difficult to navigate.

This structure also mirrors common practices used in professional React applications.

---

# Component Strategy

The application is organised into multiple component layers.

## Pages

Pages represent complete application screens.

Examples include:

- Home
- About
- Projects
- Experience
- Certifications
- Contact

---

## Sections

Sections divide pages into meaningful content blocks.

Examples include:

- Hero
- Skills
- Featured Projects
- Contact Form

---

## UI Components

UI components are small reusable interface elements.

Examples include:

- Buttons
- Cards
- Badges
- Inputs
- Tags

---

## Common Components

Common components provide shared functionality across the application.

Examples include:

- Section Titles
- Loading States
- Empty States

This layered approach keeps components focused, reusable, and easier to maintain.

---

# Styling Strategy

The design philosophy for this portfolio focuses on:

- Responsive layouts
- Accessibility
- Clean visual hierarchy
- Consistent spacing
- Reusable styling
- Minimal custom CSS

Tailwind CSS provides the styling foundation, while DaisyUI supplies common interface components that improve development speed.

---

# Documentation Strategy

Documentation is considered part of the project rather than an afterthought.

Current documentation includes:

- README.md — Public project overview.
- DEVELOPMENT_LOG.md — Session-by-session engineering log.
- PROJECT_ROADMAP.md — Long-term project vision and milestones.
- ARCHITECTURE.md — Technical architecture and design decisions.

These documents will continue evolving throughout the project lifecycle.

---

# Future Architecture Considerations

As the project grows, future improvements may include:

- Light and Dark themes
- Project filtering and search
- Blog functionality
- API integration
- Performance optimisation
- Automated deployment
- Testing
- Analytics
- Accessibility improvements

These enhancements will only be introduced when they provide meaningful value and align with the project's goals.

---

# Architecture Vision

The objective of this project extends beyond building a personal portfolio.

It is an opportunity to demonstrate how I approach software engineering—from planning and architecture to implementation, documentation, and continuous improvement.

Every technical decision made throughout this project should contribute to building an application that is scalable, maintainable, user-focused, and representative of my growth as a developer.