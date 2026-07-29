# Development Log

This document serves as the engineering log for this portfolio project.

Its purpose is to document every important decision, implementation step, and architectural choice throughout the project lifecycle.

Rather than relying on memory, this log provides a complete history of how the project has evolved.

---

# Project Information

Project Name

Personal Portfolio

Purpose

To build a professional portfolio showcasing software development, cloud computing, and technical projects.

The portfolio itself is also intended to demonstrate front-end engineering skills, clean architecture, maintainable code organisation, and good documentation practices.

---

# Development Session

Date

27 July 2026

## Session 1

Project Foundation

Duration

Approximately one hour

---

# Objectives

The goals for today's session were to:

- Decide on the technology stack.
- Create a new React application.
- Install required dependencies.
- Resolve project structure issues.
- Create a clean folder architecture.
- Prepare the project for future development.
- Begin project documentation.

---

# Technology Decisions

Framework

React

Reason

Component-based architecture, scalability, and industry adoption.

---

Build Tool

Vite

Reason

Fast development server, modern tooling, and excellent React support.

---

Routing

React Router DOM

Reason

Supports multiple pages while maintaining a single-page application architecture.

---

Styling

Tailwind CSS

Reason

Utility-first CSS framework allowing rapid and maintainable UI development.

---

Component Library

DaisyUI

Reason

Provides reusable UI components while remaining fully compatible with Tailwind CSS.

---

Version Control

Git

Reason

Track development history and prepare the project for GitHub.

---

# Project Issues Encountered

During project setup an incorrect folder was accidentally used.

A manually created folder named:

Documents/Portfolio

contained manually created files but was not a valid Vite application.

At the same time, the actual Vite application existed in:

~/portfolio

This caused confusion because both folders had similar names.

After investigation the correct Vite project was identified and the manually created folder was discarded.

No development work was lost because only folder structures had been created.

---

# Packages Installed

Dependencies installed

- React
- React DOM
- React Router DOM
- Tailwind CSS
- DaisyUI

Development dependencies

- Vite
- ESLint
- Vite React Plugin

---

# Folder Structure

The application was reorganised into feature-based folders to improve maintainability.

Created folders include:

assets

components

common

layout

sections

ui

data

hooks

layouts

pages

routes

styles

utils

This structure is intentionally scalable so future features can be added without major refactoring.

---

# Documentation Strategy

Three documentation files were introduced.

README.md

Public project documentation for GitHub visitors.

DEVELOPMENT_LOG.md

Engineering log documenting every development session.

PROJECT_ROADMAP.md

High-level planning document describing future milestones.

This mirrors documentation practices used in professional software teams.

---

# Current Status

Completed

✔ Project created

✔ Dependencies installed

✔ Folder structure organised

✔ Development documentation started

Next

- Configure Tailwind CSS
- Configure DaisyUI
- Build application layout
- Create navigation
- Create homepage
- Deploy first version

---

# Notes

This project is intended to grow continuously.

Each completed cloud project, software project, certification, and technical case study will eventually be integrated into the portfolio.

The objective is not simply to build a website but to build a professional engineering portfolio demonstrating technical growth over time.






# Development Session

**Date**

28 July 2026

## Session 2

Application Layout

**Duration**

Approximately 20 minutes

---

# Objectives

* Create the shared application layout.
* Organise reusable layout components.
* Prepare the project for page development.

---

# Work Completed

✔ Created a reusable `MainLayout` component.

✔ Organised shared components by placing the `Header`, `Footer`, and `Container` in the `common` directory.

✔ Prepared the application to use a consistent layout across all pages.

✔ Maintained the feature-based folder structure established during project setup.

---

# Current Status

Completed

✔ Project foundation complete.

✔ Folder architecture complete.

✔ Shared application layout established.

Next

* Configure React Router with the shared layout.
* Build the navigation bar.
* Develop the homepage hero section.
* Establish the global design system with Tailwind CSS and DaisyUI.









# ------------------------------------------------------------------
# Development Session
# ------------------------------------------------------------------

## Date

29 July 2026

## Session 2

Application Architecture, Styling Strategy & Project Foundation

## Duration

Approximately 2–3 hours

---

# Objectives

Today's objectives were to:

- Finalise the project architecture.
- Configure React Router.
- Establish the global styling strategy.
- Create the shared application layout.
- Build reusable navigation components.
- Decide on the portfolio branding and colour palette.
- Create a long-term development workflow.
- Prepare the project for feature development.

---

# Work Completed

## Routing

✔ Installed React Router DOM.

✔ Configured BrowserRouter.

✔ Connected all portfolio pages:

- Home
- About
- Projects
- Certifications
- Experience
- Contact

---

## Shared Layout

Created a reusable application layout consisting of:

- MainLayout
- Header
- Footer
- Container

The layout is designed to wrap every page and eliminate duplicated code.

---

## Styling Architecture

Several styling approaches were evaluated before deciding on the final architecture.

Instead of relying entirely on Tailwind utility classes inside JSX, a hybrid architecture was adopted.

Final approach:

- Tailwind CSS for layout and responsive utilities.
- CSS using Tailwind's `@apply` directive for reusable component styling.
- CSS Variables for branding, colours, spacing and design tokens.

This keeps JSX significantly cleaner while still benefiting from Tailwind's utility-first workflow.

---

## CSS Structure

The previous CSS structure was simplified.

Current structure:

styles/

- global.css
- components.css

global.css

Contains:

- Design tokens
- Colour palette
- Typography
- Global reset
- Global variables

components.css

Contains:

- Navigation
- Buttons
- Hero
- Footer
- Shared reusable components

This two-file architecture was intentionally chosen to reduce unnecessary stylesheet fragmentation.

---

## Colour System

After exploring several luxury-inspired colour palettes, some brand palette was selected.

Primary

#5C0A12

Secondary

#F8F5F2

Accent

#B76E3B

Text

#2E2E2E

Muted

#6B7280

Border

#E8E2DC

The objective is to create a premium, elegant and timeless visual identity rather than following common blue technology themes.

---

## Component Philosophy

A consistent component strategy was established.

React components are responsible only for:

- Structure
- Content
- Logic

Visual styling should primarily exist inside CSS.

This keeps JSX readable and encourages reusable styling.

---

## Documentation

The following documentation files now exist:

README.md

Public-facing documentation.

DEVELOPMENT_LOG.md

Engineering history of the project.

DESIGN_SYSTEM.md

Complete design guidelines.

PROJECT_ROADMAP.md

High-level project milestones.

---

## Design Direction

A luxury-inspired portfolio concept was selected.

Key characteristics:

- Premium typography
- Warm neutral backgrounds
- Burgundy primary colour
- Bronze accent colour
- Large whitespace
- Minimal visual clutter
- Professional presentation

The visual goal is to communicate trust, professionalism and technical expertise.

---

## Current Project Status

Completed

✔ Project setup

✔ Folder architecture

✔ React Router

✔ Shared Layout

✔ Styling strategy

✔ Design system foundation

✔ Brand identity

In Progress

Home page

Next

- Build Hero Section
- Add professional photograph
- Introduce portfolio statistics
- Add social links
- Create call-to-action buttons
- Implement responsive behaviour

---

# Engineering Decisions

Several important long-term decisions were made today.

The project will prioritise maintainability over rapid development.

Reusable components will be preferred over duplicated code.

Documentation will be updated at the end of every development session.

Major architectural changes should be avoided unless there is a clear technical benefit.

---

# Notes for Future Development

The project foundation is now considered stable.

Future development should focus on implementing features rather than restructuring the architecture.

The next major milestone is building a production-quality Hero section that reflects the established luxury design language.

# ------------------------------------------------------------------





# Development Session
# ------------------------------------------------------------------

## Date

29 July 2026

## Session 3

Application Architecture, Styling Strategy & Project Foundation

## Duration

Approximately 2–3 hours

---

# Objectives

Today's objectives were to:

- Finalise the project architecture.
- Configure React Router.
- Establish the global styling strategy.
- Create the shared application layout.
- Build reusable navigation components.
- Decide on the portfolio branding and colour palette.
- Create a long-term development workflow.
- Prepare the project for feature development.

---

# Work Completed

## Routing

✔ Installed React Router DOM.

✔ Configured BrowserRouter.

✔ Connected all portfolio pages:

- Home
- About
- Projects
- Certifications
- Experience
- Contact

---

## Shared Layout

Created a reusable application layout consisting of:

- MainLayout
- Header
- Footer
- Container

The layout is designed to wrap every page and eliminate duplicated code.

---

## Styling Architecture

Several styling approaches were evaluated before deciding on the final architecture.

Instead of relying entirely on Tailwind utility classes inside JSX, a hybrid architecture was adopted.

Final approach:

- Tailwind CSS for layout and responsive utilities.
- CSS using Tailwind's `@apply` directive for reusable component styling.
- CSS Variables for branding, colours, spacing and design tokens.

This keeps JSX significantly cleaner while still benefiting from Tailwind's utility-first workflow.

---

## CSS Structure

The previous CSS structure was simplified.

Current structure:

styles/

- global.css
- components.css

global.css

Contains:

- Design tokens
- Colour palette
- Typography
- Global reset
- Global variables

components.css

Contains:

- Navigation
- Buttons
- Hero
- Footer
- Shared reusable components

This two-file architecture was intentionally chosen to reduce unnecessary stylesheet fragmentation.

---

## Colour System

After exploring several luxury-inspired colour palettes, the final brand palette was selected.

Primary

#5C0A12

Secondary

#F8F5F2

Accent

#B76E3B

Text

#2E2E2E

Muted

#6B7280

Border

#E8E2DC

The objective is to create a premium, elegant and timeless visual identity rather than following common blue technology themes.

---

## Component Philosophy

A consistent component strategy was established.

React components are responsible only for:

- Structure
- Content
- Logic

Visual styling should primarily exist inside CSS.

This keeps JSX readable and encourages reusable styling.

---

## Documentation

The following documentation files now exist:

README.md

Public-facing documentation.

DEVELOPMENT_LOG.md

Engineering history of the project.

DESIGN_SYSTEM.md

Complete design guidelines.

PROJECT_ROADMAP.md

High-level project milestones.

---

## Design Direction

A luxury-inspired portfolio concept was selected.

Key characteristics:

- Premium typography
- Warm neutral backgrounds
- Burgundy primary colour
- Bronze accent colour
- Large whitespace
- Minimal visual clutter
- Professional presentation

The visual goal is to communicate trust, professionalism and technical expertise.

---

## Current Project Status

Completed

✔ Project setup

✔ Folder architecture

✔ React Router

✔ Shared Layout

✔ Styling strategy

✔ Design system foundation

✔ Brand identity

In Progress

Home page

Next

- Build Hero Section
- Add professional photograph
- Introduce portfolio statistics
- Add social links
- Create call-to-action buttons
- Implement responsive behaviour

---

# Engineering Decisions

Several important long-term decisions were made today.

The project will prioritise maintainability over rapid development.

Reusable components will be preferred over duplicated code.

Documentation will be updated at the end of every development session.

Major architectural changes should be avoided unless there is a clear technical benefit.

---

# Notes for Future Development

The project foundation is now considered stable.

Future development should focus on implementing features rather than restructuring the architecture.

The next major milestone is building a production-quality Hero section that reflects the established luxury design language.